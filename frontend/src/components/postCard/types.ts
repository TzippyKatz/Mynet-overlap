import type { Post } from "@libs/types/content/post.type";

export type PostCardProps = {
  post: Pick<Post, "_id" | "userId" | "postName" | "media" | "text" | "likes">;
};
