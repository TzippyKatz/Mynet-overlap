import type { Post } from "@libs/types/content/post.type";

export type PostCardProps = {
  post: Pick<Post, "postName" | "media" | "text" | "likes">;
};
