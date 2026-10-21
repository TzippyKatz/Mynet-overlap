import Joi from "joi";
import { joiMongoId } from "@libs/joi/mongo.validate.js";
import { userModel } from "../models/user.model.js";

export const canCreateUser = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    username: Joi.string()
      .trim()
      .required()
      .external(async (username) =>
        userModel
          .exists({ username })
          .then((user) =>
            user
              ? Promise.reject(
                  new Joi.ValidationError(
                    "Username already exists",
                    [],
                    username,
                  ),
                )
              : username,
          ),
      ),
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
