import "dotenv/config";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    throw new Error("MONGO_URI environment variable is required");
}

export const config = {
    mongoUri,
};
