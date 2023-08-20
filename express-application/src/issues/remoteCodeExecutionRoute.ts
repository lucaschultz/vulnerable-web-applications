import { Router } from "express";

const remoteCodeExecutionRoute = Router();

remoteCodeExecutionRoute.get("/remote-code-execution", (req, res) => {
  const amount = eval(`${req.query.amount} * 10`);
  res.send(`Hello ${amount} times!`);
});

export default remoteCodeExecutionRoute;
