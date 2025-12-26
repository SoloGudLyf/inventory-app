import { getAllBooks } from "../db/query.js";

const homeController = async (req, res) => {
  const books = await getAllBooks();
  res.send(books);
};

export { homeController };
