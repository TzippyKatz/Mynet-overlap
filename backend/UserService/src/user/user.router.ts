import { Router } from "express";
import type { createUserController } from "./user.controller.js";
import { validateCreateUser } from "./user.validator.js";

export const createUserRouter = (
  userController: ReturnType<typeof createUserController>,
) => {
  const userRouter = Router();

  userRouter.post("/", validateCreateUser, userController.createUser);

  userRouter.get("/", userController.getAllUsers);

  return userRouter;
};
