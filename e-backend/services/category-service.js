import { pool } from "../config/mysql-config.js";

export async function addCategory(property, values) {
  const vals = values;
  const [rows] = await pool.query(
    `INSERT INTO category (${property}) VALUES(?)`,
    [vals]
  );
  return rows;
}
