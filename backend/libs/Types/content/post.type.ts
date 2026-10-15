import type { Schema } from "mongoose";

export type Post = {
  postName: string;
  userId: Schema.Types.ObjectId;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
};