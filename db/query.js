import { pool } from "./pool.js";

async function getAllBooks() {
  const { rows } = await pool.query("SELECT * FROM books_info");
  console.log(rows);

  return rows;
}

export { getAllBooks };
