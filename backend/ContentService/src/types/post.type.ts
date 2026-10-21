import type { Post } from "@libs/Types/content/post.type.js";

export type CreatePostPayload = Pick<
  Post,
  "userId" | "postName" | "text" | "media"
>;

export type UpdatePostPayload = Pick<Post, "postName" | "text" | "media">;
