import { getBooksByCategory } from "../db/query.js";

const homeController = async (req, res) => {
  const books = await getBooksByCategory("Self help");
  res.send(books);
};

export { homeController };
