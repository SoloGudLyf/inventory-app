import { getAllCategories, getBooksByCategory } from "../db/query.js";

const homeController = async (req, res) => {
  const allCategories = await getAllCategories();
  const categorizedBooks = await getCategorizedBooks(allCategories, []);
  console.log(categorizedBooks);

  res.render("homePage.ejs", { allBooks: categorizedBooks });
};

async function getCategoryBooks(category) {
  return await getBooksByCategory(category);
}

async function getCategorizedBooks(categories, arr) {
  const bookPromises = categories.map(async (category) => {
    arr.push(await getCategoryBooks(category.category));
  });
  await Promise.all(bookPromises);
  arr = arr.filter((element) => element.length > 0);
  return arr;
}

export { homeController };
