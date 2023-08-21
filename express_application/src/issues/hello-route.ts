import { Router } from "express";

const helloRoute = Router();

helloRoute.get("/hello", (req, res) => {
  const amount = eval(`${req.query.amount} * 10`);
  res.send(`Hello ${amount} times!`);
});

export default helloRoute;
