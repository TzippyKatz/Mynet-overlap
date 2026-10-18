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

  const getUserById = (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    const { id } = req.params;

    if (typeof id !== "string") {
      res.status(400).json({ message: "Invalid user ID" });
      return Promise.resolve();
    }

    return userManager
      .getUserById(id)
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: "User not found" });
          return;
        }
        res.status(200).json(user);
      })
      .catch(next);
  };

  return {
    createUser,
    getAllUsers,
    getUserById,
  };
};
