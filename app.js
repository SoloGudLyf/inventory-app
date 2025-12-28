import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { viewBookInfo } from "./controller/updateBook.js";
import { updateBook } from "./controller/updateBook.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", userRouter);
app.get("/update", viewBookInfo);
app.post("/updateBook", updateBook);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
