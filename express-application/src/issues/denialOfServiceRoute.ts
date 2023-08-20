import express, { Router } from "express";

const denialOfServiceRoute = Router();

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(value: unknown) {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    !("name" in value) ||
    typeof value.name !== "string" ||
    value.name.length === 0
  ) {
    throw new ValidationError(`Invalid User: ${JSON.stringify(value)}`);
  }

  return { name: value.name };
}

const validateUserArray = (value: unknown) => {
  if (!Array.isArray(value)) {
    throw new ValidationError(
      `Expected user array received ${JSON.stringify(value)}`
    );
  }

  return value.map(validateUser);
};

async function work(user: { name: string }) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return user.name;
}

denialOfServiceRoute.post(
  "/denial-of-service",
  express.json(),
  async (req, res) => {
    try {
      const users = validateUserArray(req.body);
      const names = [];

      for (const user of users) {
        names.push(await work(user));
      }

      res.send(names.join(", "));
    } catch (err) {
      if (err instanceof ValidationError) {
        res.status(400).send(err.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }
);

export default denialOfServiceRoute;
