import type { Post } from "@libs/types/content/post.type";

export type EditPostProps = {
  post: Pick<Post, "_id" | "postName" | "text" | "media">;
};
