// lib/db.js
import pkg from "pg";
const { Pool } = pkg;

// Use environment variable
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_PRODUCTION,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

export default pool;
