import { pool } from "../config/mysql-config.js";

export async function addSpec(property, values) {
  const vals = values;
  // const [rows] = await pool.query(
  //   `INSERT INTO spec (${prop[0]}, ${prop[1]}, ${prop[2]}, ${prop[3]} ) VALUES (?)`[
  //     vals
  //   ]
  // );
  // return rows;
  // console.log(prop);
}
