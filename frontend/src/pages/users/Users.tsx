import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useUsers } from "./functions";
import { useStyles } from "./styles";

const Users: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: users = [], isLoading, isError } = useUsers();

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("users.title")}</h1>

      {isLoading ? (
        <div className={classes.list}>
          {[1, 2, 3].map((item) => (
            <ContentLoader
              key={item}
              speed={1.5}
              width="100%"
              height={76}
              viewBox="0 0 400 76"
              backgroundColor="#f3f4f6"
              foregroundColor="#e5e7eb"
            >
              <rect x="0" y="12" rx="4" ry="4" width="180" height="14" />
              <rect x="0" y="38" rx="4" ry="4" width="260" height="10" />
            </ContentLoader>
          ))}
        </div>
      ) : isError ? (
        <p className={classes.error}>{t("users.loadError")}</p>
      ) : users.length === 0 ? (
        <p className={classes.message}>{t("users.empty")}</p>
      ) : (
        <div className={classes.list}>
          {users.map((user) => (
            <article key={user._id} className={classes.userCard}>
              <h2 className={classes.displayedName}>{user.displayedName}</h2>
              <p className={classes.username}>@{user.username}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export { Users };
