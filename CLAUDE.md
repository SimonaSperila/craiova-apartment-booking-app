# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A multilingual (RO/EN) website for a short-term rental apartment in Craiova, Romania. It gives guests a digital user guide, showcases nearby attractions/events, and displays live guest reviews scraped from Booking.com. Four services wired together with Docker Compose: `frontend` (React SPA), `backend` (REST API), `db` (MySQL), `scraper` (Playwright job), plus a `backup` sidecar that dumps the DB hourly.

## Commands

### Docker (full stack)
```bash
cp .env.example .env      # fill in real values first
docker compose up --build
```
Frontend: http://localhost:8080 — Backend API: http://localhost:3000. The `db` service seeds itself from `backend/init.sql` on first run.

### Frontend (`frontend/`)
```bash
npm install
npm run dev        # Vite dev server with HMR
npm run build
npm run lint
npm test            # vitest run (all tests, once)
npm run test:watch  # vitest watch mode
npx vitest run src/pages/events/Events.test.jsx   # single test file
```

### Backend (`backend/`)
```bash
npm install
node index.js       # requires a reachable MySQL; reads DB_HOST/DB_USER/DB_PASSWORD/DB_NAME (defaults assume the Docker `db` container)
```
No test suite or lint script currently exists for the backend.

### Scraper (`scraper/`)
```bash
npm install
node scrape.js       # runs a real headless-browser scrape against Booking.com and writes to the DB
npm test             # vitest run — tests extractReviews/extractOverallScore against saved HTML fixtures, no network/DB needed
```

### CI
`.github/workflows/test.yml` runs on push/PR to `main`: frontend `npm test`, and scraper tests (after `npx playwright install --with-deps chromium`). Backend has no CI job.

## Architecture

### Frontend routing & i18n
Routes are language-prefixed: `/:lang/apartment`, `/:lang/events`, etc. (see `frontend/src/app/App.jsx`), with an unprefixed `/` also serving `Home`. Language is resolved in `frontend/src/i18n.js`: first from the URL path segment, then `localStorage`, falling back to `"ro"`; changing language persists it to `localStorage`. Translation strings live in `frontend/src/locales/{en,ro}.json` and are consumed via `react-i18next`. Pages live under `frontend/src/pages/<page>/`, each with co-located `.module.css` and a `components/` subfolder for page-specific pieces; shared components (`Header`, `Footer`, `LanguageSwitcher`, sliders) live in `frontend/src/components/`.

### Backend
Single-file Express API (`backend/index.js`) with no framework layering — routes, SQL, and the `mysql2` pool all live in that one file. Three endpoints:
- `GET /places?lang=ro|en` — joins `places` + `place_translations`.
- `GET /events?lang=ro|en` — joins `events` + `event_translations`, ordered by date/time.
- `GET /reviews` — returns the most recent row from `scrape_runs` (aggregate Booking.com score).

### Database
Schema + seed data lives entirely in `backend/init.sql` (a mysqldump), auto-applied by the MySQL container on first boot only — it is **not** a migration system, so schema changes made by hand against a running DB won't be reflected here unless the dump is regenerated. Tables: `places`/`place_translations`, `events`/`event_translations` (translated columns split into a `*_translations` table keyed by `language`), and `scrape_runs`/`reviews` (written by the scraper, read by `/reviews`; each `reviews` row references its parent `scrape_runs.id`).

### Scraper
`scraper/scrape.js` drives headless Chromium (Playwright) against a hardcoded Booking.com listing URL, paginates through the review list, and inserts one `scrape_runs` row plus N `reviews` rows per run. It's a one-shot script (`node scrape.js`), not a scheduled service in `docker-compose.yml` — nothing currently re-runs it automatically. The pure extraction logic (`extractReviews`, `extractOverallScore`) is exported separately from the DB/browser orchestration specifically so `scrape.test.js` can unit-test DOM parsing against static fixtures without a live page or database.

### Cross-service coupling
Frontend, backend, and scraper independently duplicate assumptions about DB schema and content (e.g. `category` values for events, `image` filenames under `frontend/src/assets/`). There's no shared types/schema package — when changing a table shape, check all three services and `backend/init.sql`.
