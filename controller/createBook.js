import { addBook, createCategory, getCategoryId } from "../db/query.js";

const fillBookDetails = (req, res) => {
  const emptyDetails = {
    id: "",
    name: "",
    author: "",
    num_of_pages: "",
    num_available: "",
    price: "",
    ratings: "",
    category: "",
  };
  res.render("bookForm", {
    book: emptyDetails,
    action: "createBook",
    category: "true",
  });
};

const createBook = async (req, res) => {
  let bookCategory = await getCategoryId(req.body.category);

  if (bookCategory.length === 0) {
    await createCategory(req.body.category);
    bookCategory = await getCategoryId(req.body.category);
  }
  console.log(bookCategory);

  const bookInfo = [
    req.body.bookName,
    req.body.author,
    req.body.numOfPages,
    req.body.numAvailable,
    req.body.price,
    req.body.ratings,
    bookCategory[0].id,
  ];

  await addBook(bookInfo);
  res.redirect("/");
};

export { fillBookDetails, createBook };
