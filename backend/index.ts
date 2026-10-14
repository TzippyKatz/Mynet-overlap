import express from "express";
import { initDB } from "./config/connection.js";
import { createUserService } from "./user/index.js";

const app = express();

app.use(express.json());

app.use("/users", createUserService());

const start = async (): Promise<void> => {
  await initDB();

  app.listen(3000, () => {
    console.log("Server listening on http://localhost:3000");
  });
};

start();
