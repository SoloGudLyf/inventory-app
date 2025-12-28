import { getBookInfo, updateTable } from "../db/query.js";

const viewBookInfo = async (req, res) => {
  const bookInfo = await getBookInfo(req.query.name, req.query.category);

  res.render("bookUpdatePage", { book: bookInfo[0] });
};

const updateBook = async (req, res) => {
  console.log(req.body);
  const id = Number(req.query.id);
  const newValues = [
    req.body.bookName,
    req.body.author,
    req.body.numOfPages,
    req.body.numAvailable,
    req.body.price,
    req.body.ratings,
    id,
  ];
  console.log(newValues);

  await updateTable(newValues);
  res.redirect("/");
};

export { viewBookInfo, updateBook };
