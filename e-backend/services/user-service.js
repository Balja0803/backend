import { pool } from "../config.js";

export async function getUser(limit) {
  const [rows] = await pool.query(`SELECT * FROM USER limit ${limit} `);
  return rows;
}
