const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ POOL corect pentru Docker
const db = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "userpass",
  database: process.env.DB_NAME || "craiova",
  waitForConnections: true,
  connectionLimit: 10,
  charset: "utf8mb4"
});

// ✔ optional: test conexiune simplu
db.query("SELECT 1", (err) => {
  if (err) {
    console.error("DB not ready:", err.message);
  } else {
    console.log("Connected to MySQL (pool ready)");
  }
});

// GET places
app.get("/places", (req, res) => {
  const lang = req.query.lang || "ro";

  const sql = `
    SELECT 
      p.id,
      p.distance_m,
      p.latitude,
      p.longitude,
      p.image,
      pt.name,
      pt.description
    FROM places p
    INNER JOIN place_translations pt 
      ON p.id = pt.place_id
    WHERE pt.language = ?
  `;

  db.query(sql, [lang], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET events
app.get("/events", (req, res) => {
  const lang = req.query.lang || "ro";

  const sql = `
    SELECT
      e.id,
      e.event_date,
      e.location,
      e.image,
      e.is_popular,
      et.title,
      et.description
    FROM events e
    INNER JOIN event_translations et
      ON e.id = et.event_id
    WHERE et.language = ?
    ORDER BY e.event_date ASC
  `;

  db.query(sql, [lang], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get("/reviews", (req, res) => {
  const sqlRun = `
    SELECT id, score_number, score_text, reviews_text
    FROM scrape_runs
    ORDER BY id DESC
    LIMIT 1
  `;

  db.query(sqlRun, (err, runResult) => {
    if (err) return res.status(500).json(err);

    if (!runResult.length) {
      return res.json({ overallScore: null });
    }

    const run = runResult[0];

    const overallScore = {
      scoreNumber: run.score_number,
      scoreText: run.score_text,
      reviewsText: run.reviews_text,
    };

    res.json({ overallScore });
  });
});

// server start
app.listen(3000, () => {
  console.log("Backend running on 3000");
});
