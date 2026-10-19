import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";

export const userRPCService = (host: string, port: number) => {
  const userRPCClient = jayson.Client.http({
    host,
    port,
  });

  return {
    getUserById: async (userId: string) =>
      rpcClientRequest(userRPCClient, "getUserById", { userId }),
  };
};
