import { userRepository } from "./user.repository.js";
import { contentService } from "../rpc.client.js";
import isNil from "lodash/isNil.js";

export const userManager = {
  create: userRepository.create,

  getAll: userRepository.getAll,

  getById: userRepository.getById,

  deleteUserPosts: async (username: string): Promise<void> => {
    const user = await userRepository.getByUsername(username);

    if (isNil(user)) {
      throw new Error(`User with username ${username} does not exist`);
    }

    return contentService.deletePostsByUserId(user._id);
  },
};
