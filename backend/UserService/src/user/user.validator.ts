import Joi from "joi";
import { joiMongoId } from "@libs/joi/mongo.validate.js";

export const canCreateUser = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    username: Joi.string().trim().required(),
    displayedName: Joi.string().trim().required(),
  }).required(),
});

export const canGetUserById = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),
  body: Joi.object({}),
});
