# Shakespeare Apartment Craiova

A multilingual website for a short-term rental apartment in Craiova, Romania. It gives guests a digital user guide (check-in/check-out, house rules, contact info), showcases nearby attractions, restaurants, local businesses and events, and displays the property's guest review score scraped from Booking.com.

The project is split into five services, all wired together with Docker Compose:

| Service    | Description                                                        | Tech |
|------------|---------------------------------------------------------------------|------|
| `frontend` | React SPA served by nginx in production                             | React 18, Vite, React Router, i18next |
| `backend`  | REST API for places, events, restaurants, local businesses and reviews | Express, MySQL2 |
| `db`       | Relational database storing places, events, translations, and scraped reviews | MySQL 8 |
| `scraper`  | Headless-browser job that scrapes guest reviews from Booking.com     | Playwright |
| `backup`   | Sidecar that periodically dumps the database to `./backups`          | MySQL 8 (mysqldump) |

## Features

- **Multilingual UI** (Romanian, English, Bulgarian, Serbian) with language persisted across page refresh, powered by `i18next` and `react-i18next`. Routes are language-prefixed (e.g. `/en/apartment`).
- **Pages:** Home, Apartment (with a user guide covering house rules and check-in/out info), Events, Gallery, Local Area, Contact, plus Privacy Policy, Cookie Policy, and Terms and Conditions.
- **Booking.com review score** scraped from the property's listing and served through the backend API.
- **Local area info:** nearby places (attractions) with translated names/descriptions and distance from the apartment, restaurants, and local businesses.
- Fully containerized with automatic **hourly database backups**.

## Project structure

```
.
├── frontend/             React app (Vite)
│   └── vercel.json       SPA rewrites for Vercel
├── backend/              Express API
│   ├── init.sql          Database schema + seed data
│   └── migrations/       SQL scripts for updating an existing database
├── scraper/              Playwright script that scrapes Booking.com reviews
├── backups/              Generated MySQL dumps (created by the backup service)
├── docs/                 Screenshots
├── .github/workflows/    CI tests and scheduled scraping
├── render.yaml           Render blueprint for the backend
└── docker-compose.yml
```

## Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose
- Node.js 20.19+ or 22.12+ (only needed for local, non-Docker development)

## Getting started (Docker)

1. Copy the example environment file and fill in your own values:

   ```bash
   cp .env.example .env
   ```

2. Start everything:

   ```bash
   docker compose up --build
   ```

3. Open the app:

   - Frontend: [http://localhost:8080](http://localhost:8080)
   - Backend API: [http://localhost:3000](http://localhost:3000)

The `db` service seeds itself from `backend/init.sql` on first run. The `backup` service waits for MySQL to be ready and then dumps the `craiova` database to `./backups` every hour. The `scraper` service scrapes Booking.com reviews and stores them in the database on startup.

## Environment variables

Defined in `.env` (see `.env.example`):

| Variable              | Description                        |
|-----------------------|-------------------------------------|
| `MYSQL_ROOT_PASSWORD` | Root password for the MySQL server  |
| `MYSQL_DATABASE`      | Database name (`craiova`)           |
| `MYSQL_USER`          | Application database user           |
| `MYSQL_PASSWORD`      | Password for the application user   |

The backend and scraper read their database connection from these variables (Docker Compose sets them automatically):

| Variable      | Description                                         | Default   |
|---------------|-----------------------------------------------------|-----------|
| `DB_HOST`     | MySQL host                                          | `db`      |
| `DB_PORT`     | MySQL port                                          | `3306`    |
| `DB_USER`     | Database user                                       | `user`    |
| `DB_PASSWORD` | Database password                                   | `userpass`|
| `DB_NAME`     | Database name                                       | `craiova` |
| `DB_SSL`      | Set to `true` to connect over SSL                   | —         |
| `DB_SSL_CA`   | CA certificate for SSL (takes precedence over `DB_SSL`) | —     |
| `PORT`        | Port the backend listens on (backend only)          | `3000`    |

The frontend reads `VITE_API_URL` (see `frontend/.env.example`), defaulting to `http://localhost:3000`.

## Local development (without Docker)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs the Vite dev server with hot reload.

### Backend

```bash
cd backend
npm install
node index.js
```

Requires a running MySQL instance reachable via the `DB_*` environment variables above.

### Scraper

```bash
cd scraper
npm install
node scrape.js
```

Launches a headless Chromium browser via Playwright, scrapes the configured Booking.com listing's reviews, and writes them to the database configured via the `DB_*` environment variables.

> This is a personal-use script that checks the guest review score/count for my own Booking.com listing, run occasionally (twice a month) — not run at scale.

## Tests

```bash
cd frontend && npm test   # Vitest + Testing Library
cd scraper && npm test    # tests review extraction against saved HTML fixtures (no network/DB)
```

The backend has no test suite.

## Continuous integration

- [`.github/workflows/test.yml`](.github/workflows/test.yml) runs the frontend and scraper tests on every push/PR to `main`.
- [`.github/workflows/scrape.yml`](.github/workflows/scrape.yml) runs the scraper against the live database at 03:00 UTC on the 1st and 15th of each month (and on manual dispatch). It reads `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, and `DB_SSL` from the repository secrets.

## API

The backend exposes:

- `GET /places?lang=ro|en|bg|sr` — list of nearby places with translated name/description, distance, Google Maps link, and image (falls back to English if a translation is missing).
- `GET /events?lang=ro|en|bg|sr` — list of events with translated title/description/location, ordered by date and time (same English fallback).
- `GET /restaurants` — nearby restaurants with distance, rating, category, and Google Maps link.
- `GET /local-businesses` — nearby local businesses with distance, category, Google Maps link, and whether they are open 24/7.
- `GET /reviews` — the latest scrape run's overall Booking.com score (score number, score label, and review count text).

## Database schema

[`backend/init.sql`](backend/init.sql) creates and seeds these tables on first run:

- `places` / `place_translations` — attraction/place records (distance, image, Google Maps link) with per-language name/description.
- `events` / `event_translations` — event records (date, time, category) with per-language title/description/location.
- `restaurants` — nearby restaurants (distance, rating, category).
- `local_businesses` — nearby shops and services (distance, category, 24/7 flag).
- `scrape_runs` / `reviews` — written by the scraper: one row per scrape run (overall Booking.com score) and the individual guest reviews collected in that run.

`init.sql` is only applied when the database is first created. To update an existing database, run the relevant scripts from [`backend/migrations/`](backend/migrations/), e.g.:

```bash
mysql -u <user> -p craiova < backend/migrations/add-bg-sr-translations.sql
```

## Deployment (free hosting)

This is one way to host a public, read-only demo of the site for free:

- **Frontend → [Vercel](https://vercel.com)**: import the repo, set the project root to `frontend/`. Vercel auto-detects Vite (`npm run build`, output `dist/`). Add an environment variable `VITE_API_URL` pointing at your deployed backend URL (e.g. `https://your-backend.onrender.com`). `frontend/vercel.json` rewrites all paths to `index.html` so client-side routes like `/en/apartment` work on refresh.
- **Backend → [Render](https://render.com)**: either deploy the [`render.yaml`](render.yaml) blueprint, or create a Web Service manually with root directory `backend/`, build command `npm install`, start command `node index.js`. Render sets `PORT` automatically; the app already reads `process.env.PORT`. Set `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` to match your database, plus `DB_SSL=true` (or `DB_SSL_CA` with a CA certificate) if your database requires SSL.
- **Database → any free MySQL host** (e.g. [Aiven](https://aiven.io) or [Clever Cloud](https://www.clever-cloud.com)): create a MySQL instance, then load the schema/seed data by running `backend/init.sql` against it (e.g. `mysql -h <host> -P <port> -u <user> -p <database> < backend/init.sql`).
- The **scraper** is not deployed as a service — the scheduled GitHub Actions workflow runs it against the live database (configure the `DB_*` repository secrets), or you can run it locally pointed at the live database via env vars.
