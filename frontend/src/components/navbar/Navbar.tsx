import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";

const Navbar: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <nav className={classes.navbar}>
      <button className={classes.link} onClick={() => navigate("/users")}>
        {t("navbar.users")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/users/create")}
      >
        {t("navbar.createUser")}
      </button>

      <button className={classes.link} onClick={() => navigate("/posts")}>
        {t("navbar.posts")}
      </button>

      <button
        className={classes.link}
        onClick={() => navigate("/posts/create")}
      >
        {t("navbar.createPost")}
      </button>
    </nav>
  );
};

export { Navbar };
