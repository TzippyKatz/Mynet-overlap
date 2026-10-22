import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";

export const validateRequest =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await schema
      .validateAsync(
        {
          body: req.body,
          params: req.params,
          query: req.query,
        },
        { abortEarly: false },
      )
      .then(() => next())
      .catch((error: unknown) => {
        res.status(400).json({
          message: "Validation failed",
          details:
            error instanceof Error
              ? [error.message]
              : ["Unknown validation error"],
        });
      });
  };
