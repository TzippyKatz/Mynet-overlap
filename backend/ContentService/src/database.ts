import mongoose from "mongoose";
import { connectServiceDatabase } from "@libs/config/database.js";
import { config } from "./config.js";

const contentServiceDatabase = connectServiceDatabase(
  mongoose.connection,
  config.db.mongoUri,
);

export const connectContentServiceDatabase = contentServiceDatabase.connect;
