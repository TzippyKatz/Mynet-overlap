import type { FC } from "react";
import { Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contexts/themeContext/ThemeContext";
import { useStyles } from "./styles";

const Navbar: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation("translation", { keyPrefix: "NAVBAR" });

  return (
    <nav className={classes.navbar}>
      <button className={classes.link} onClick={() => navigate("/users")}>
        {t("USERS")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/users/create")}
      >
        {t("CREATE_USER")}
      </button>

      <button className={classes.link} onClick={() => navigate("/posts")}>
        {t("POSTS")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/posts/create")}
      >
        {t("CREATE_POST")}
      </button>

      <button
        className={classes.themeToggle}
        onClick={toggleTheme}
        aria-label={t(theme === "light" ? "DARK_MODE" : "LIGHT_MODE")}
        aria-pressed={theme === "dark"}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        {t(theme === "light" ? "DARK_MODE" : "LIGHT_MODE")}
      </button>
    </nav>
  );
};

export { Navbar };
