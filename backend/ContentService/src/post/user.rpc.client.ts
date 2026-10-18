import jayson from "jayson/promise";
import { config } from "../config.js";
import { rpcClientRequest } from "../../../../libs/src/rpc/rpc.functions.js";

const userRPCClient = jayson.Client.http({
  host: "localhost",
  port: Number(config.rpc.port),
});

export const createUserRPCService = () => {
  const getUserById = async (userId: string) => {
    return rpcClientRequest(userRPCClient, "getUserById", { userId });
  };

  return {
    getUserById,
  };
};
