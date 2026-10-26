import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { Pencil, Trash2 } from "lucide-react";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useNavigate } from "react-router-dom";

const PostCard: FC<PostCardProps> = ({
  post: { _id, userId, postName, media, text, likes },
}) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "POST_CARD" });
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user") ?? "null");
  const isOwner = currentUser?._id === String(userId);

  const queryClient = useQueryClient();

  const { mutate: deletePost } = useMutation({
    mutationFn: contentService.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS,
      });
    },
  });

  return (
    <article className={classes.postCard}>
      {isOwner && (
        <div className={classes.actions}>
          <button
            type="button"
            aria-label={t("EDIT")}
            className={classes.editButton}
            onClick={() => navigate(`/posts/edit/${_id}`)}
          >
            <Pencil size={18} />
          </button>

          <button
            type="button"
            aria-label={t("DELETE")}
            className={classes.deleteButton}
            onClick={() => {
              if (window.confirm(t("CONFIRM_DELETE"))) {
                deletePost(_id);
              }
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      )}
      <h2 className={classes.postName}>{postName}</h2>
      {media && <img className={classes.media} src={media} alt={postName} />}
      <p className={classes.postText}>{text}</p>
      <p className={classes.likes}>{t("LIKES", { count: likes })}</p>
    </article>
  );
};

export { PostCard };
