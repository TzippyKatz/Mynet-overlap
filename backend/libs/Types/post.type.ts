import type { Schema } from "mongoose";

export type Post = {
  postName: string;
  userId: Schema.Types.ObjectId;
  text: String;
  media?: String;
  likes: Number;
  createdAt: Date;
};