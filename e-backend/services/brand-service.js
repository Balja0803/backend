import { pool } from "../config/mysql-config.js";

export async function addBrand(property, values) {
  const vals = values;
  const [rows] = await pool.query(`INSERT INTO brand (${property}) VALUES(?)`, [
    vals,
  ]);
  return rows;
}
