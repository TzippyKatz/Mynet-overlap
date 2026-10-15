import { type Document, model, Schema } from "mongoose";

const MAX_TEXT_LENGTH = 200;

export type Post = {
  postName: string;
  userId: Schema.Types.ObjectId;
  text: string;
  media?: string;
  likes?: number;
  createdAt: Date;
};

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
        validator: (val: string) => /^https?:\/\/.+/.test(val),
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
