import { pool } from "../config/mysql-config.js";

export async function addSpec(property, values) {
  const vals = values;
  const [rows] = await pool.query(
    `INSERT INTO spec (${property}) VALUES (?)`[vals]
  );
  return rows;
}
