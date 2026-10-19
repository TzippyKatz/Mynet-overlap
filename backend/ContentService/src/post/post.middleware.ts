import type { Request, Response, NextFunction } from "express";
import type { ObjectSchema } from "joi";

export const validateRequest =
  (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(
      {
        body: req.body,
        params: req.params,
        query: req.query,
      },
      { abortEarly: false },
    );

    if (error) {
      res.status(400).json({
        message: "Validation failed",
        details: error.details.map(({ message }) => message),
      });
      return;
    }

    next();
  };
