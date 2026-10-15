import { error } from "console";
import { initDB } from "./config/connection.js";
import mongoose from "mongoose";

const start = async (): Promise<void> => {
  await initDB();
};

start().catch((error) => {
  console.error("Error starting the application:", error);
});
