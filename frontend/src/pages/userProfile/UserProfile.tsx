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
  const { userId } = useParams<{ userId: string }>();
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

  if (isLoading) {
    return <p>{t("LOADING")}</p>;
  }

  if (isError) {
    return <p>{t("LOAD_ERROR")}</p>;
  }

  if (!user) {
    return <p>{t("NOT_FOUND")}</p>;
  }

  return (
    <div className={classes.profile}>
      <div className={classes.avatar}>
        <UserRound size={52} strokeWidth={1.5} />
      </div>

      <div className={classes.info}>
        <h1 className={classes.displayedName}>{user.displayedName}</h1>

        <div className={classes.username}>
          <AtSign size={16} />
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export { UserProfile };
