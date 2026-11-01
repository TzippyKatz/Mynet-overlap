import type { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  ExternalLink,
  FileText,
  Pencil,
  Trash2,
  UserRound,
} from "lucide-react";
import { useStyles } from "./styles";
import type { PostCardProps } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/user/user.service";
import { endsWith, filter, first, flow, last, split, toLower } from "lodash/fp";
import type { Post } from "@libs/types/content/post.type";

const PostCard: FC<PostCardProps> = ({
  post: { _id, userId, postName, media, text, likes = 0 },
}) => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "POST_CARD" });
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: [...QUERY_KEYS.USERS, userId],
    queryFn: () => userService.getUserById(String(userId)),
    enabled: Boolean(userId),
  });

  const currentUser = JSON.parse(localStorage.getItem("user") ?? "null");
  const isOwner = currentUser?._id === String(userId);

  const queryClient = useQueryClient();

  const { mutate: deletePost } = useMutation({
    mutationFn: contentService.deletePost,
    onSuccess: () => {
      queryClient.setQueryData(
        QUERY_KEYS.POSTS,
        (posts: Post[] | undefined) =>
          posts && filter((post) => post._id !== _id, posts),
      );
    },
  });

  const isPdf = media
    ? endsWith(".pdf", toLower(new URL(media).pathname))
    : false;

  return (
    <article className={classes.postCard}>
      <div className={classes.header}>
        <button
          type="button"
          className={classes.user}
          onClick={() => navigate(`/users/${userId}`)}
        >
          <UserRound className={classes.avatar} size={20} />

          <span>{user ? `#${user.displayedName}` : t("LOADING_USER")}</span>
        </button>

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
              onClick={() =>
                window.confirm(t("CONFIRM_DELETE")) && deletePost(_id)
              }
            >
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>

      <h2 className={classes.postName}>{postName}</h2>

      {media &&
        (isPdf ? (
          <a
            href={media}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.pdfLink}
          >
            <FileText size={26} className={classes.pdfIcon} />

            <span className={classes.pdfInfo}>
              <strong>
                {flow(split("?"), first, split("/"), last)(media) ||
                  "PDF document"}
              </strong>
              <small>{t("VIEW_PDF")}</small>
            </span>

            <ExternalLink size={18} className={classes.pdfExternalIcon} />
          </a>
        ) : (
          <img className={classes.media} src={media} alt={postName} />
        ))}

      <p className={classes.postText}>{text}</p>
      <p className={classes.likes}>{t("LIKES", { count: likes })}</p>
    </article>
  );
};

export { PostCard };
