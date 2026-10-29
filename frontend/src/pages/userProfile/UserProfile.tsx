import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { userService } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useStyles } from "./styles";
import { AtSign, UserRound } from "lucide-react";

const UserProfile: FC = () => {
  const classes = useStyles();
  const { userId } = useParams();
  const { t } = useTranslation("translation", { keyPrefix: "USER_PROFILE" });

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [...QUERY_KEYS.USERS, userId],
    queryFn: () => userService.getUserById(userId!),
    enabled: Boolean(userId),
  });

  return (
    <>
      {isLoading ? (
        <p>{t("LOADING")}</p>
      ) : isError ? (
        <p>{t("LOAD_ERROR")}</p>
      ) : !user ? (
        <p>{t("NOT_FOUND")}</p>
      ) : (
        <div className={classes.profile}>
          <UserRound className={classes.avatar} size={52} strokeWidth={1.5} />

          <div className={classes.info}>
            <h1 className={classes.displayedName}>{user.displayedName}</h1>

            <p className={classes.username}>
              <AtSign size={16} />
              <span>{user.username}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export { UserProfile };
