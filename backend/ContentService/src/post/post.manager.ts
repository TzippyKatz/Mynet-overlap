import type {
  CreatePostPayload,
} from "../../../../libs/src/types/content/postPayload.type.js";
// import { isNil } from "lodash/fp";
import isNil from "lodash/isNil.js";
import { postRepository } from "./post.repository.js";
import { userService } from "../rpc.client.js";
import type { Post } from "../../../../libs/src/Types/content/post.type.js";
import type { Document } from "mongoose";

type PostDocument = Post & Document;

export const postManager = {
  create: async (post: CreatePostPayload): Promise<PostDocument> => {
    const user = await userService.getUserById(post.userId);

    if (isNil(user)) {
      throw new Error(`User with id ${post.userId} does not exist`);
    }

    return await postRepository.create(post);
  },

  getAll: postRepository.getAll,

  getById: postRepository.getById,

  update: postRepository.update,

  delete: postRepository.delete,
};
