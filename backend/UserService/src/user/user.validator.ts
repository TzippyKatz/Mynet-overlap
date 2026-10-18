import type { Request, Response, NextFunction } from "express";
import { isValidObjectId } from "mongoose";

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

export const validateGetUserById = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { id } = req.params;

  const isValid = isValidObjectId(id);

  return isValid
    ? next()
    : void res.status(400).json({
        message: "id must be a valid user id",
      });
};
