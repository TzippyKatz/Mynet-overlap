import jayson from "jayson/promise";

import { rpcClientRequest } from "./rpc.functions.js";

export const userRPCService = (hostname: string, port: number) => {
  const rpcClient = jayson.Client.http(hostname, port);

  const getUserById = (userId: string) =>
    rpcClientRequest(rpcClient, "getUserById", { userId });

  return {
    getUserById,
  };
};
