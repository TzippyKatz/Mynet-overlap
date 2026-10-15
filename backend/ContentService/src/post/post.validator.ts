import type { Request, Response, NextFunction } from "express";
import { MAX_TEXT_LENGTH } from "../../../../libs/src/consts.js";

export const validateCreatePost = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { userId, postName, text, media } = req.body;

  const isValid =
    typeof userId === "string" &&
    userId.trim().length > 0 &&
    typeof postName === "string" &&
    postName.trim().length > 0 &&
    typeof text === "string" &&
    text.trim().length > 0 &&
    text.length <= MAX_TEXT_LENGTH &&
    (media === undefined ||
      (typeof media === "string" && /^https?:\/\/.+/.test(media)));

  return isValid
    ? next()
    : void res.status(400).json({
        message:
          "userId, postName and text are required strings. Text must not exceed the maximum length, and media must be a valid URL if provided.",
      });
};

export const validateUpdatePost = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { postName, text, media } = req.body;

  const isValid =
    (postName === undefined ||
      (typeof postName === "string" && postName.trim().length > 0)) &&
    (text === undefined ||
      (typeof text === "string" &&
        text.trim().length > 0 &&
        text.length <= MAX_TEXT_LENGTH)) &&
    (media === undefined ||
      (typeof media === "string" && /^https?:\/\/.+/.test(media)));

  return isValid
    ? next()
    : void res.status(400).json({
        message:
          "Post fields must be valid strings. Text must not exceed the maximum length, and media must be a valid URL if provided.",
      });
};
