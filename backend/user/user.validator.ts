import type { Request, Response, NextFunction } from "express";

export const validateCreateUser = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const { username, displayedName } = req.body;

    const isValid =
        typeof username === "string" &&
        username.trim().length > 0 &&
        typeof displayedName === "string" &&
        displayedName.trim().length > 0;

    return isValid
        ? next()
        : void res.status(400).json({
              message: "username and displayedName are required strings",
          });
};
