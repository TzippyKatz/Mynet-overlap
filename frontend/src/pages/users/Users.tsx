import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useStyles } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { userService } from "../../services/user/user.service";
import { map, times } from "lodash/fp";
import { USERS_SKELETON_COUNT } from "./const";
import { isEmpty } from "lodash/fp";

const Users: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "users" });
  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: userService.getUsers,
  });

  return (
    <div className={classes.users}>
      <h1 className={classes.title}>{t("title")}</h1>

      {isLoading ? (
        <div className={classes.list}>
          {times(
            (item) => (
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
            ),
            USERS_SKELETON_COUNT,
          )}
        </div>
      ) : isError ? (
        <p className={classes.error}>{t("loadError")}</p>
      ) : isEmpty(users) ? (
        <p className={classes.message}>{t("empty")}</p>
      ) : (
        <div className={classes.list}>
          {map(
            ({ _id, username, displayedName }) => (
              <article key={_id} className={classes.userCard}>
                <h2 className={classes.displayedName}>{displayedName}</h2>
                <p className={classes.username}>@{username}</p>
              </article>
            ),
            users,
          )}
        </div>
      )}
    </div>
  );
};

export { Users };
