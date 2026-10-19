import jayson from "jayson/promise/index.js";
import { rpcServerRequest } from "@libs/rpc/rpc.functions.js";
import { userManager } from "./user/user.manager.js";

export const rpcServer = new jayson.Server({
  getUserById: rpcServerRequest(userManager.getById),
});
