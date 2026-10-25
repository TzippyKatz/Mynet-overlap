import type { FC } from "react";
import { useStyles } from "./styles";
import type { UserCardProps } from "./props.types";

const UserCard: FC<UserCardProps> = ({ user }) => {
  const classes = useStyles();
  const { username, displayedName } = user;

  return (
    <article className={classes.userCard}>
      <div className={classes.avatar}>
        <svg
          viewBox="0 0 24 24"
          className={classes.userIcon}
          aria-hidden="true"
        >
          <path
            d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="7"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </div>

      <div className={classes.userInfo}>
        <h2 className={classes.displayedName}>{displayedName}</h2>
        <p className={classes.username}>@{username}</p>
      </div>
    </article>
  );
};

export { UserCard };
