import { createUserRepository } from "./user.repository.js";
import { createUserManager } from "./user.manager.js";
import { createUserController } from "./user.controller.js";
import { createUserRouter } from "./user.router.js";
import { createUserModel } from "../models/user.model.js";

export const createUserService = () => {
    const userModel = createUserModel();
    const userRepository = createUserRepository(userModel);
    const userManager = createUserManager(userRepository);
    const userController = createUserController(userManager);
    const userRouter = createUserRouter(userController);

    return userRouter;
};
