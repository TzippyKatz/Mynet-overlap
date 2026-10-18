export type UserRPCService = {
  getUserById: (id: string) => Promise<unknown | null>;
};
