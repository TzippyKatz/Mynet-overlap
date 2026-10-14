import type { Request, Response, NextFunction } from "express";
import type { createUserManager } from "./user.manager.js";

export const createUserController = (
    userManager: ReturnType<typeof createUserManager>,
) => {
    const createUser = (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        const { username, displayedName } = req.body;

        return userManager
            .createUser(username, displayedName)
            .then((user) => {
                res.status(201).json(user);
            })
            .catch(next);
    };

    const getAllUsers = (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> => {
        return userManager
            .getAllUsers()
            .then((users) => {
                res.status(200).json(users);
            })
            .catch(next);
    };

    return {
        createUser,
        getAllUsers,
    };
};
