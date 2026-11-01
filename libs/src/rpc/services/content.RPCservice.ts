import jayson from "jayson/promise/index.js";
import { rpcClientRequest } from "../rpc.functions.js";

export const contentRPCService = (host: string, port: number) => {
  const contentRPCClient = jayson.Client.http({
    host,
    port,
  });

  return {
    deletePostsByUserId: async (userId: string): Promise<void> =>
      rpcClientRequest<void>(contentRPCClient, "deletePostsByUserId", {
        userId,
      }),
  };
};
