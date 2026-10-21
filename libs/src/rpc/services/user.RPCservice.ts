import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";
import type { User } from "../../Types/user/user.type.js";

export const userRPCService = (host: string, port: number) => {
  const userRPCClient = jayson.Client.http({
    host,
    port,
  });

  return {
    getUserById: async (userId: string): Promise<User | null> =>
      rpcClientRequest<User | null>(userRPCClient, "getUserById", { userId }),
  };
};
