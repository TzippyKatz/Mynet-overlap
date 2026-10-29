export type User = {
  _id: string;
  username: string;
  displayedName: string;
};

export type CreateUserPayload = Omit<User, "_id">;

export type LoginPayload = Pick<User, "username">;

export type LoginResult = {
  token: string;
  user: User;
};
