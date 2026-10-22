import type { ErrorRequestHandler } from "express";

const isDuplicateKeyError = (error: unknown): error is { code: 11000 } =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === 11000;

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  next,
) => {
  if (isDuplicateKeyError(error)) {
    res.status(409).json({
      message: "Username already exists",
    });
    return;
  }

  next(error);
};
