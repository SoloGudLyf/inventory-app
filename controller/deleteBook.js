import { deleteEntity } from "../db/query.js";

const deleteBook = async (req, res) => {
  const name = req.query.name;
  console.log(name);

  await deleteEntity(name);
  res.redirect("/");
};

export default deleteBook;
