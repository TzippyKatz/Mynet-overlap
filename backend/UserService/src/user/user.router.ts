import { Router } from "express";
import { userController } from "./user.controller.js";
import { canCreateUser, canGetUserById } from "./user.validator.js";
import { validateRequest } from "@libs/validation/middleware.js";

const userRouter = Router();

userRouter.post("/", validateRequest(canCreateUser), userController.create);

userRouter.get("/:id", validateRequest(canGetUserById), userController.getById);

userRouter.get("/", userController.getAll);

export default userRouter;
