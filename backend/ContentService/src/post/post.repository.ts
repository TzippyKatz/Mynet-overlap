import { Types, type Document, type Model } from "mongoose";
import type { Post } from "../../../../libs/src/Types/content/post.type.js";

export const createPostRepository = (postModel: Model<Post & Document>) => {
  const createPost = async (post: {
    userId: string;
    postName: string;
    text: string;
    media?: string;
  }) => {
    return postModel.create({
      ...post,
      userId: new Types.ObjectId(post.userId),
    });
  };

  const getAllPosts = async () => {
    return postModel.find().sort({ createdAt: -1 });
  };

  const getPostById = async (id: string) => {
    return postModel.findById(id);
  };

  const updatePost = async (
    id: string,
    post: {
      postName?: string;
      text?: string;
      media?: string;
    },
  ) => {
    return postModel.findByIdAndUpdate(
      id,
      { $set: post },
      { new: true, runValidators: true },
    );
  };

  const deletePost = async (id: string) => {
    return postModel.findByIdAndDelete(id);
  };

  return {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
  };
};
