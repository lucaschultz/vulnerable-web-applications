import { Router } from "express";
import sqlite3 from "sqlite3";

const genresRoute = Router();

const db = new sqlite3.Database("../assets/chinook.db");

genresRoute.get("/genres", (req, res) => {
  db.all(
    `SELECT * FROM genres WHERE name LIKE '%${req.query.search}%'`,
    (err, rows) => {
      if (err) {
        res.status(500).send("An unexpected error occurred");
      } else {
        res.json(rows);
      }
    }
  );
});

export default genresRoute;
