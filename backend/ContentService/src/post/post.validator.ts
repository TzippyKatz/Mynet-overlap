import Joi from "joi";
import { joiMongoId } from "@libs/joi/mongo.validate.js";
import { MAX_TEXT_LENGTH } from "@libs/consts/post.js";

export const canCreatePost = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    userId: joiMongoId().required(),
    postName: Joi.string().trim().required(),
    text: Joi.string().trim().max(MAX_TEXT_LENGTH).required(),
    media: Joi.string().uri({ scheme: ["http", "https"] }),
  }).required(),
});

export const canGetAllPosts = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({}),
});

export const canGetPostById = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),
  body: Joi.object({}),
});

export const canUpdatePost = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),
  body: Joi.object({
    postName: Joi.string().trim(),
    text: Joi.string().trim().max(MAX_TEXT_LENGTH),
    media: Joi.string().uri({ scheme: ["http", "https"] }),
  }).required(),
});

export const canDeletePost = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: joiMongoId().required(),
  }).required(),
  body: Joi.object({}),
});
