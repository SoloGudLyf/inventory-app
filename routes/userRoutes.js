import Router from "express";
import { homeController } from "../controller/home.js";
import { viewBookInfo } from "../controller/updateBook.js";

const userRouter = Router();

userRouter.get("/", homeController);

export { userRouter };
