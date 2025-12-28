import { pool } from "./pool.js";

async function getBooksByCategory(category) {
  const { rows } = await pool.query(
    "SELECT books_info.id AS book_id,name,author,num_of_pages,num_available,price,ratings,book_categories.category FROM books_info JOIN book_categories ON books_info.category=book_categories.id WHERE book_categories.category=$1",
    [category]
  );

  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(
    "SELECT * FROM book_categories ORDER BY LOWER(category) ASC,id ASC"
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

async function deleteEntity(id) {
  await pool.query("DELETE FROM books_info WHERE name=$1", [id]);
}

async function addBook(bookInfo) {
  await pool.query(
    "INSERT INTO books_info (name,author,num_of_pages,num_available,price,ratings,category) VALUES ($1,$2,$3,$4,$5,$6,$7)",
    [...bookInfo]
  );
}

async function getCategoryId(name) {
  const { rows } = await pool.query(
    "SELECT id FROM book_categories WHERE category=$1;",
    [name]
  );
  return rows;
}

async function createCategory(name) {
  await pool.query("INSERT INTO book_categories (category) VALUES($1)", [name]);
}

export {
  getBooksByCategory,
  getAllCategories,
  getBookInfo,
  updateTable,
  deleteEntity,
  addBook,
  getCategoryId,
  createCategory,
};
