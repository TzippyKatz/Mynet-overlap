import { initDB } from "./config/connection.js";
import mongoose from "mongoose";

const start = async (): Promise<void> => {
    await initDB();

    console.log("Database:", mongoose.connection.name);
};

start().catch((err) => {
    console.error("Error starting the application:", err);
});
