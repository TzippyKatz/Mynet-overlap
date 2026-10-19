import type { Client } from "jayson/promise/index.js";

export const rpcClientRequest = async <T>(
  rpcClient: Client,
  method: string,
  args?: Record<string, unknown>,
): Promise<T> => {
  const response = (await rpcClient.request(method, {
    args: Object.values(args ?? {}),
  })) as {
    result?: T;
    error?: { message: string };
  };

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.result as T;
};

export const rpcServerRequest =
  <T>(managerFunction: (...args: any[]) => Promise<T>) =>
  async ({ args }: { args: unknown[] }): Promise<T> => {
    return managerFunction(...args);
  };
