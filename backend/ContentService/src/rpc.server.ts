import jayson from "jayson/promise/index.js";
import { rpcServerRequest } from "@libs/rpc/rpc.functions.js";
import { postManager } from "./post/post.manager.js";

export const rpcServer = new jayson.Server({
  deletePostsByUserId: rpcServerRequest(postManager.deleteByUserId),
});
