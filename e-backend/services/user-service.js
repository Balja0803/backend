import { pool } from "../config/mysql-config.js";

export async function getUser(limit) {
  const [rows] = await pool.query(`SELECT * FROM USER limit ${limit} `);
  return rows;
}
export async function addUser(properties, values) {
  const vals = values;
  const [rows] = await pool.query(
    `INSERT INTO user (${properties}) VALUES (?)`,
    [vals]
  );
  return rows;
}

export async function deleteUser(id) {
  const [rows] = await pool.query(`DELETE FROM user WHERE id=${id}`);
  return rows;
}
