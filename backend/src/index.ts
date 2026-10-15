import { initDB } from "./config/connection.js";

const start = async (): Promise<void> => {
  await initDB();
};

start().catch((error) => {
  console.error("Error starting the application:", error);
});
