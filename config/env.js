import { config } from "dotenv";

// Load environment variables based on NODE_ENV

config({ path: `.env.${process.env?.NODE_ENV || "development"}.local` });

// Explicitly assign variables after `config()`
export const {PORT,NODE_ENV,DB_URI,JWT_SECRET,JWT_EXPIRES_IN} = process.env;

