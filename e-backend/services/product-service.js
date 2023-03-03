import { pool } from "../config/mysql-config.js";

export async function getProduct(limit) {
  const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  return rows;
}

export async function addProduct(property, values) {
  const vals = values;
  const [rows] = await pool.query(
    `INSERT INTO product (${property}) VALUES (?)`,
    [vals]
  );
  return rows;
}
