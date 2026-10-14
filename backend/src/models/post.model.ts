import { type Document, type Model, model, Schema } from "mongoose";

export type Post = {
  postName: string;
  userId: Schema.Types.ObjectId;
  text: String;
  media?: String;
  likes: Number;
  createdAt: Date;
};

export const createPostModel = (): Model<Post & Document> => {
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
        MaxLength: 200,
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

  return model<Post & Document>("posts", postSchema);
};
