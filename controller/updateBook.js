import { getBookInfo } from "../db/query.js";

const updateBook = async (req, res) => {
  const bookInfo = await getBookInfo(req.query.name, req.query.category);
  console.log(bookInfo);

  res.render("bookUpdatePage", { book: bookInfo[0] });
};

export { updateBook };
