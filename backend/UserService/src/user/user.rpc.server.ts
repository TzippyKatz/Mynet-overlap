import jayson from "jayson/promise";

import { rpcServerRequest } from "../../../../libs/src/rpc/rpc.functions.js";
import type { createUserManager } from "./user.manager.js";

export const createUserRPCServer = (
  userManager: ReturnType<typeof createUserManager>,
) => {
  return new jayson.Server({
    getUserById: rpcServerRequest(userManager.getUserById),
  });
};
