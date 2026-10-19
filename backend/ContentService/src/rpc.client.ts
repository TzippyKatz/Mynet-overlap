import { config } from "./config.js";
import { userRPCService } from "../../../libs/src/rpc/services/user.RPCservice.js";

const userService = userRPCService(config.rpc.host, config.rpc.port);

export { userService };
