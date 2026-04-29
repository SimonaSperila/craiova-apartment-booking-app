const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ POOL (corect pentru Docker)
const db = mysql.createPool({
  host: "db",
  user: "user",
  password: "userpass",
  database: "craiova",
  waitForConnections: true,
  connectionLimit: 10
});

// ❌ REMOVE connectWithRetry (nu există la pool)

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
  db.query("SELECT * FROM places", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// server start
app.listen(3000, () => {
  console.log("Backend running on 3000");
});