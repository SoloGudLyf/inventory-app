import Router from "express";
import { homeController } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/", homeController);


export {userRouter}