# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A multilingual (RO/EN/BG/SR) website for a short-term rental apartment in Craiova, Romania. It gives guests a digital user guide, showcases nearby attractions, restaurants, local businesses and events, and displays the guest review score scraped from Booking.com. Four services wired together with Docker Compose: `frontend` (React SPA), `backend` (REST API), `db` (MySQL), `scraper` (Playwright job), plus a `backup` sidecar that dumps the DB hourly.

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
node index.js       # requires a reachable MySQL; reads DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME, optional DB_SSL=true or DB_SSL_CA, and PORT (defaults assume the Docker `db` container)
```
No test suite or lint script currently exists for the backend.

### Scraper (`scraper/`)
```bash
npm install
node scrape.js       # runs a real headless-browser scrape against Booking.com and writes to the DB (same DB_* env vars as the backend)
npm test             # vitest run — tests extractReviews/extractOverallScore against saved HTML fixtures, no network/DB needed
```

### CI
`.github/workflows/test.yml` runs on push/PR to `main`: frontend `npm test`, and scraper tests (after `npx playwright install --with-deps chromium`). Backend has no CI job.

`.github/workflows/scrape.yml` runs `node scrape.js` against the live database at 03:00 UTC on the 1st and 15th of each month (plus manual dispatch), using `DB_*` repository secrets.

### Deployment
Frontend on Vercel (`frontend/vercel.json` rewrites all paths to `index.html`; `VITE_API_URL` points at the backend, read via `frontend/src/config.js`), backend on Render (`render.yaml` blueprint), MySQL on an external host with SSL.

## Architecture

### Frontend routing & i18n
Routes are language-prefixed: `/:lang/apartment`, `/:lang/events`, `/:lang/gallery`, `/:lang/local-area`, `/:lang/contact`, plus legal pages (`privacy-policy`, `cookie-policy`, `terms-and-conditions`) (see `frontend/src/app/App.jsx`), with an unprefixed `/` also serving `Home`. Supported languages are `SUPPORTED_LANGUAGES = ["ro", "en", "bg", "sr"]` in `frontend/src/i18n.js` (Serbian uses Latin script; `INTL_LOCALES` maps it to `sr-Latn` for `Intl` formatters). Language is resolved there: first from the URL path segment, then `localStorage`, falling back to `"ro"`; changing language persists it to `localStorage`. Translation strings live in `frontend/src/locales/{ro,en,bg,sr}.json` and are consumed via `react-i18next`; legal page content is Markdown in `frontend/src/content/legal/<page>.<lang>.md`, rendered by `LegalContent` with `react-markdown`. Pages live under `frontend/src/pages/<page>/`, each with co-located `.module.css` and a `components/` subfolder for page-specific pieces; shared components (`Header`, `Footer`, `LanguageSwitcher`, sliders, lightbox, tabs) live in `frontend/src/components/`.

### Backend
Single-file Express API (`backend/index.js`) with no framework layering — routes, SQL, and the `mysql2` pool all live in that one file. Endpoints:
- `GET /places?lang=ro|en|bg|sr` — joins `places` + `place_translations`, falling back to the `en` translation when the requested language is missing.
- `GET /events?lang=ro|en|bg|sr` — joins `events` + `event_translations` (same `en` fallback), ordered by date/time.
- `GET /restaurants` — rows from `restaurants` (not translated).
- `GET /local-businesses` — rows from `local_businesses` (not translated).
- `GET /reviews` — returns the most recent row from `scrape_runs` (aggregate Booking.com score).

### Database
Schema + seed data lives in `backend/init.sql` (a mysqldump), auto-applied by the MySQL container on first boot only. Changes to an existing DB go in hand-written, apply-once scripts under `backend/migrations/`; the same rows must also be added to `init.sql` so fresh setups match. Tables: `places`/`place_translations`, `events`/`event_translations` (translated columns split into a `*_translations` table keyed by `language`), `restaurants`, `local_businesses`, and `scrape_runs`/`reviews` (written by the scraper, read by `/reviews`; each `reviews` row references its parent `scrape_runs.id`).

### Scraper
`scraper/scrape.js` drives headless Chromium (Playwright) against a hardcoded Booking.com listing URL, paginates through the review list, and inserts one `scrape_runs` row plus N `reviews` rows per run. It's a one-shot script (`node scrape.js`): in `docker-compose.yml` it runs once on startup, and in production it's re-run twice a month by `.github/workflows/scrape.yml`. The pure extraction logic (`extractReviews`, `extractOverallScore`) is exported separately from the DB/browser orchestration specifically so `scrape.test.js` can unit-test DOM parsing against static fixtures without a live page or database.

### Cross-service coupling
Frontend, backend, and scraper independently duplicate assumptions about DB schema and content (e.g. `category` values for events, `image` filenames under `frontend/src/assets/`). There's no shared types/schema package — when changing a table shape, check all three services, `backend/init.sql`, and add a script under `backend/migrations/`.
