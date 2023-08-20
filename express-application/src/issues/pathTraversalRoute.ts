import { Router } from "express";
import * as fs from "fs";

const pathTraversalRoute = Router();

pathTraversalRoute.get("/path-traversal", (req, res) => {
  fs.readFile(`../assets/public/${req.query.category}`, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        res
          .status(404)
          .send("Unknown category, please try 'artists' or 'genres'");
        return;
      }
      res
        .status(500)
        .send("An unexpected error occurred, please try again later");
      return;
    }

    res.send(data);
  });
});

export default pathTraversalRoute;
