import { Router } from "express";
import sqlite3 from "sqlite3";

const sqlInjectionRoute = Router();

const db = new sqlite3.Database("../assets/chinook.db");

sqlInjectionRoute.get("/sql-injection", (req, res) => {
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

export default sqlInjectionRoute;
