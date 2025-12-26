import { pool } from "./pool.js";

async function getBooksByCategory(category) {
  const { rows } = await pool.query(
    "SELECT * FROM books_info JOIN book_categories ON books_info.category=book_categories.id WHERE book_categories.category=$1",
    [category]
  );
  console.log(rows);

  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM book_categories");
  return rows;
}
export { getBooksByCategory, getAllCategories };
