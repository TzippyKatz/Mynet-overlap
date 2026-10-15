import { type Document, model, Schema } from "mongoose";
import type { Post } from "../libs/Types/post.type.js";
import { MAX_TEXT_LENGTH } from "../libs/consts.js";

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxlength: MAX_TEXT_LENGTH,
    },
    media: {
      type: String,
      validate: {
        validator: (value: string) => /^https?:\/\/.+/.test(value),
        message: "media must be a valid URL",
      },
      createdAt: {
        type: Date,
        default: Date.now,
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
