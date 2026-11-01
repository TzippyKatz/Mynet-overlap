import { config } from "./config.js";
import { contentRPCService } from "@libs/rpc/services/content.RPCservice.js";

export const contentService = contentRPCService(
  config.contentRpc.host,
  config.contentRpc.port,
);
