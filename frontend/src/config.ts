import { serviceInfo } from "@libs/servers/serviceInfo";

export const config = {
  server: {
    user: {
      url: `${serviceInfo.user.env}${serviceInfo.user.local.port}${serviceInfo.user.api}`,
    },
    content: {
      url: `${serviceInfo.content.env}${serviceInfo.content.local.port}${serviceInfo.content.api}`,
    },
  },
};
