import type { Post } from "@libs/Types/content/post.type";

export type PostCardProps = {
  post: Pick<Post, "_id" | "postName" | "media" | "text" | "likes">;
};
