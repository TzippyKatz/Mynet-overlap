import { config } from "./config.js";
import { userRPCService } from "@libs/rpc/services/user.RPCservice.js";

const userService = userRPCService(config.userRpc.host, config.userRpc.port);

export { userService };
