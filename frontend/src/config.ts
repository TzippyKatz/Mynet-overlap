const { VITE_USER_SERVICE_URL, VITE_CONTENT_SERVICE_URL } = import.meta.env;

export const config = {
  server: {
    user: {
      url: VITE_USER_SERVICE_URL,
    },
    content: {
      url: VITE_CONTENT_SERVICE_URL,
    },
  },
};
