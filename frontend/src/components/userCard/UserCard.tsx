import type { FC } from "react";
import { useStyles } from "./styles";
import type { UserCardProps } from "./props.types";
import avatarIcon from "../../assets/icons/avatar.svg";

const UserCard: FC<UserCardProps> = ({ user: { username, displayedName } }) => {
  const classes = useStyles();

  return (
    <article className={classes.userCard}>
      <div className={classes.avatar}>
        <img src={avatarIcon} className={classes.userIcon} alt="" />
      </div>
      <div className={classes.userInfo}>
        <h2 className={classes.displayedName}>{displayedName}</h2>
        <p className={classes.username}>@{username}</p>
      </div>
    </article>
  );
};

export { UserCard };
