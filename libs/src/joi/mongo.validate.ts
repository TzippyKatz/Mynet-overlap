import Joi from "joi";

export const joiMongoId = () =>
  Joi.string()
    .regex(/^[\dA-Fa-f]{24}$/u)
    .message("value is not a valid mongoId");
