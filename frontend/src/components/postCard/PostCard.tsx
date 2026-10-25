import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";

const PostCard: FC<PostCardProps> = ({
  post: { postName, media, text, likes },
}) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "POST_CARD" });

  return (
    <article className={classes.postCard}>
      <h2 className={classes.postName}>{postName}</h2>
      {media && <img className={classes.media} src={media} alt={postName} />}
      <p className={classes.postText}>{text}</p>
      <p className={classes.likes}>{t("LIKES", { count: likes })}</p>
    </article>
  );
};

export { PostCard };
