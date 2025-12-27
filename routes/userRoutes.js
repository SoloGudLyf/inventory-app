import Router from "express";
import { homeController } from "../controller/home.js";
import { updateBook } from "../controller/updateBook.js";

const userRouter = Router();

userRouter.get("/", homeController);
userRouter.get("update", updateBook);

export { userRouter };
