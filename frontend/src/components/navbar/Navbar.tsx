import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";

const Navbar: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });

  return (
    <nav className={classes.navbar}>
      <button className={classes.link} onClick={() => navigate("/users")}>
        {t("USERS")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/users/create")}
      >
        {t("createUser")}
      </button>

      <button className={classes.link} onClick={() => navigate("/posts")}>
        {t("posts")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/posts/create")}
      >
        {t("createPost")}
      </button>
    </nav>
  );
};

export { Navbar };
