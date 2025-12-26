import express from "express";
import { userRouter } from "./routes/userRoutes.js";

const app = express();
app.get("/", userRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
