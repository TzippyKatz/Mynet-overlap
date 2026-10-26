import type { Post } from "./post.type.js";

export type CreatePostPayload = Pick<
  Post,
  "userId" | "postName" | "text" | "media"
>;

export type UpdatePostPayload = Partial<
  Pick<Post, "postName" | "text" | "media">
>;
