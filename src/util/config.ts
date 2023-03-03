import fs from 'fs';
import { config } from 'dotenv';

// Checking if .env exists
if (!fs.existsSync('.env')) {
    console.error("[#] ERROR: .env file doesn't seem to exist!");
}

// Getting all the .env
config();

export const { CLIENT_URL } = process.env;
export const { PORT } = process.env;
export const { MONGO_URI } = process.env;