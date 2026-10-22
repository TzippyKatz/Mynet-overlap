import type { CreatePostPayload } from "./post.type.js";
import isNil from "lodash/isNil.js";
import { postRepository } from "./post.repository.js";
import { userService } from "../rpc.client.js";
import type { Post } from "@libs/Types/content/post.type.js";

export const postManager = {
  create: async (post: CreatePostPayload): Promise<Post> => {
    const user = await userService.getUserById(post.userId.toString());

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
