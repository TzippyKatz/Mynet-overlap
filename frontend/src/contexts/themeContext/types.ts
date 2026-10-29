import type { Function0 } from "lodash";

export type Theme = "light" | "dark";

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: Function0<void>;
};
