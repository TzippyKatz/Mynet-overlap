import { type Document, model, Schema } from "mongoose";
import { MAX_TEXT_LENGTH } from "@libs/consts/post.js";
import type { Post } from "@libs/types/content/post.type.js";

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
      maxlength: MAX_TEXT_LENGTH,
    },
    media: {
      type: String,
      validate: {
        validator: (value: string) => /^https?:\/\/.+/.test(value),
        message: "media must be a valid URL",
      },
    },
    likes: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

export const postModel = model<Post & Document>("posts", postSchema);
