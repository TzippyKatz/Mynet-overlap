import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useStyles } from "./styles";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { userService } from "../../services/user/user.service";
import { map, times } from "lodash/fp";
import { USERS_SKELETON_COUNT } from "./consts";
import { isEmpty } from "lodash/fp";
import UserCard from "../../components/userCard";

const Users: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "USERS" });
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
      <h1 className={classes.title}>{t("TITLE")}</h1>

      {isLoading ? (
        <div className={classes.list}>
          {times(
            (index) => (
              <ContentLoader
                key={index}
                speed={1.5}
                width="100%"
                height={76}
                viewBox="0 0 400 76"
                backgroundColor="var(--skeleton-bg)"
                foregroundColor="var(--skeleton-fg)"
              >
                <rect x="0" y="12" rx="4" ry="4" width="180" height="14" />
                <rect x="0" y="38" rx="4" ry="4" width="260" height="10" />
              </ContentLoader>
            ),
            USERS_SKELETON_COUNT,
          )}
        </div>
      ) : isError ? (
        <p className={classes.error}>{t("LOAD_ERROR")}</p>
      ) : isEmpty(users) ? (
        <p className={classes.message}>{t("EMPTY")}</p>
      ) : (
        <div className={classes.list}>
          {map(
            (user) => (
              <UserCard key={user._id} user={user} />
            ),
            users,
          )}
        </div>
      )}
    </div>
  );
};

export { Users };
