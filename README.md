# Shakespeare Apartment Craiova

A multilingual website for a short-term rental apartment in Craiova, Romania. It gives guests a digital user guide (check-in/check-out, house rules, contact info), showcases nearby attractions and events, and displays live guest reviews pulled from Booking.com.

The project is split into four services, all wired together with Docker Compose:

| Service    | Description                                                        | Tech |
|------------|---------------------------------------------------------------------|------|
| `frontend` | React SPA served by nginx in production                             | React 18, Vite, React Router, i18next |
| `backend`  | REST API for places and reviews                                     | Express, MySQL2 |
| `db`       | Relational database storing places, translations, and scraped reviews | MySQL 8 |
| `scraper`  | Headless-browser job that scrapes guest reviews from Booking.com     | Playwright |
| `backup`   | Sidecar that periodically dumps the database to `./backups`          | MySQL 8 (mysqldump) |

## Features

- **Multilingual UI** (Romanian / English) with language persisted across page refresh, powered by `i18next` and `react-i18next`.
- **Home, Apartment, and Events pages**, plus a user guide with an image/text slider covering house rules and check-in/out info.
- **Live reviews** scraped from the property's Booking.com page and served through the backend API.
- **Nearby places** (attractions) with translated names/descriptions and distance from the apartment.
- Fully containerized with automatic **hourly database backups**.

## Project structure

```
.
├── frontend/       React app (Vite)
├── backend/        Express API
│   └── init.sql    Database schema + seed data
├── scraper/         Playwright script that scrapes Booking.com reviews
├── backups/         Generated MySQL dumps (created by the backup service)
├── docs/            Screenshots and other docs
└── docker-compose.yml
```

## Prerequisites

- [Docker](https://www.docker.com/) and Docker Compose
- Node.js 20+ (only needed for local, non-Docker development)

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

Requires a running MySQL instance and the `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` environment variables (defaults assume a Docker `db` container).

### Scraper

```bash
cd scraper
npm install
node scrape.js
```

Launches a headless Chromium browser via Playwright, scrapes the configured Booking.com listing's reviews, and writes them to the database.

## API

The backend exposes:

- `GET /places?lang=ro|en` — list of nearby places with translated name/description, distance, and image.
- `GET /reviews` — latest scrape run's overall Booking.com score and review summary.

## Database schema

[`backend/init.sql`](backend/init.sql) seeds two tables on first run:

- `places` — attraction/place records (location, image, distance from the apartment).
- `place_translations` — per-language name/description for each place.

The scraper additionally writes to `scrape_runs` (metadata per scrape execution — overall score, review text) and `reviews` (individual guest reviews). These tables are expected to exist in the database but are not currently part of `init.sql`.
