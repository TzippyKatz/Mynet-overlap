import { serviceInfo } from "@libs/servers/serviceInfo";

const { VITE_ENV } = import.meta.env;

export const config = {
  server: {
    user: {
      url: `${VITE_ENV === "local" ? `http://localhost:${serviceInfo.user.local.port}` : ""}${serviceInfo.user.api}`,
    },
    content: {
      url: `${VITE_ENV === "local" ? `http://localhost:${serviceInfo.content.local.port}` : ""}${serviceInfo.content.api}`,
    },
  },
};
