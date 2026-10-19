import jayson from "jayson/promise/index.js";
import { rpcServerRequest } from "../../../libs/src/rpc/rpc.functions.js";

export const rpcServer = new jayson.Server({
  getUserById: rpcServerRequest(userManager.getUserById),
});
