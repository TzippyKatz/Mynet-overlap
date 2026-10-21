import mongoose from "mongoose";
import { connectServiceDatabase } from "@libs/config/database.js";
import { config } from "./config.js";

const userServiceDatabase = connectServiceDatabase(
  mongoose.connection,
  config.db.mongoUri,
);

export const connectUserServiceDatabase = userServiceDatabase.connect;
