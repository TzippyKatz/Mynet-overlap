import type { Function1 } from "lodash";

export type UserRPCService = {
  getUserById: Function1<string, Promise<unknown | null>>;
};
