import { Pool } from "pg";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const client = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  database: process.env.DB_NAME,
});

export default client;
