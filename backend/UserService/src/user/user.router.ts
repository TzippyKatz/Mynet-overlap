import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateCreateUser, validateGetUserById } from "./user.validator.js";

const userRouter = Router();

userRouter.post("/", validateCreateUser, userController.create);

userRouter.get("/:id", validateGetUserById, userController.getById);

userRouter.get("/", userController.getAll);

export default userRouter;
