import express from "express";
import { userRouter } from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set("view engine", "ejs");
app.set("view", path.join(__dirname, "views"));
app.get("/", userRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
