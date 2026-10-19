import jayson from "jayson/promise/index.js";

import { rpcClientRequest } from "./rpc.functions.js";

export const userRPCService = ( hostname: string, port: number): {
  getUserById: (userId: string) => ReturnType<typeof rpcClientRequest>;
} => {
  const rpcClient = jayson.Client.http({hostname, port});

  const getUserById = (userId: string) =>
    rpcClientRequest(rpcClient, "getUserById", { userId });

  return {
    getUserById,
  };
};
