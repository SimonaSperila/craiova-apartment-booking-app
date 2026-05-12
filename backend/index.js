const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ POOL corect pentru Docker
const db = mysql.createPool({
  host: "db",
  user: "user",
  password: "userpass",
  database: "craiova",
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

// server start
app.listen(3000, () => {
  console.log("Backend running on 3000");
});
