import { pool } from "./pool.js";

async function getBooksByCategory(category) {
  const { rows } = await pool.query(
    "SELECT books_info.id AS book_id,name,author,num_of_pages,num_available,price,ratings,book_categories.category FROM books_info JOIN book_categories ON books_info.category=book_categories.id WHERE book_categories.category=$1",
    [category]
  );
  console.log(rows);

  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(
    "SELECT * FROM book_categories ORDER BY category"
  );
  return rows;
}

async function getBookInfo(name, category) {
  const { rows } = await pool.query(
    "SELECT * FROM books_info JOIN book_categories ON books_info.category=book_categories.id WHERE books_info.name=$1 AND book_categories.category=$2; ",
    [name, category]
  );
  return rows;
}

async function updateTable(newValues) {
  await pool.query(
    "UPDATE books_info SET name=$1, author=$2 , num_of_pages=$3 , num_available=$4 , price=$5 , ratings=$6   WHERE id=$7;",
    [...newValues]
  );
}

export { getBooksByCategory, getAllCategories, getBookInfo, updateTable };
