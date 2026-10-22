import type { Express } from "express";

export const startServer = async (
  app: Express,
  port: number | undefined,
  connectDatabase: () => Promise<void>,
  serviceName: string,
): Promise<void> => {
  await connectDatabase();

  port
    ? app.listen(port, () => {
        console.log(`${serviceName} is running on port ${port}`);
      })
    : console.error(
        `${serviceName.toUpperCase()}_PORT is not defined in the environment variables.`,
      );
};
