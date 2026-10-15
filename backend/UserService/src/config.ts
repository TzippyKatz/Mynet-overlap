import "dotenv/config";

const { MONGO_URI } = process.env;

export const config = {
  db: {
    mongoUri: MONGO_URI,
  },
};
