export type CreatePostPayload = {
  userId: string;
  postName: string;
  text: string;
  media?: string;
};

export type UpdatePostPayload = {
  postName?: string;
  text?: string;
  media?: string;
};
