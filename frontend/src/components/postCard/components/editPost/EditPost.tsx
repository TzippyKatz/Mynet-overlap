import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty, trim } from "lodash/fp";
import { useNavigate, useParams } from "react-router-dom";
import { MAX_TEXT_LENGTH } from "@libs/consts/post.js";
import type { UpdatePostPayload } from "@libs/types/content/postPayload.type";
import { useStyles } from "./styles";
import { contentService } from "../../../../services/content/content.service";
import { QUERY_KEYS } from "../../../../utils/queryKeys";

const EditPost = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "EDIT_POST" });
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: post,
    isLoading,
    isError: isLoadError,
  } = useQuery({
    queryKey: [...QUERY_KEYS.POSTS, id],
    queryFn: () => contentService.getPostById(id!),
    enabled: Boolean(id),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePostPayload>({
    defaultValues: {
      postName: "",
      text: "",
      media: "",
    },
  });

  useEffect(() => {
    if (post) {
      reset({
        postName: post.postName,
        text: post.text,
        media: post.media ?? "",
      });
    }
  }, [post, reset]);

  const {
    mutate: updatePost,
    isPending,
    isError: isUpdateError,
    isSuccess,
  } = useMutation({
    mutationFn: (payload: UpdatePostPayload) =>
      contentService.updatePost(id!, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS,
      });
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEYS.POSTS, id],
      });
      navigate("/posts");
    },
  });

  const onSubmit = ({ postName, text, media }: UpdatePostPayload): void => {
    updatePost({
      postName: trim(postName ?? ""),
      text: trim(text ?? ""),
      media: trim(media ?? ""),
    });
  };

  if (isLoading) {
    return (
      <div className={classes.loader}>
        <ContentLoader
          speed={1.5}
          width="100%"
          height={24}
          viewBox="0 0 400 24"
          backgroundColor="var(--skeleton-bg)"
          foregroundColor="var(--skeleton-fg)"
        >
          <rect x="0" y="6" rx="4" ry="4" width="400" height="12" />
        </ContentLoader>
      </div>
    );
  }

  if (isLoadError || !post) {
    return (
      <p className={classes.serverError} role="alert">
        {t("LOAD_ERROR")}
      </p>
    );
  }

  return (
    <div className={classes.editPost}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="postName">
            {t("POST_NAME")}
          </label>

          <input
            id="postName"
            className={`${classes.input} ${
              errors.postName ? classes.inputError : ""
            }`}
            {...register("postName", {
              validate: (value) =>
                !isEmpty(trim(value ?? "")) || t("POST_NAME_REQUIRED"),
            })}
          />

          {errors.postName && (
            <p className={classes.error}>{errors.postName.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="text">
            {t("TEXT")}
          </label>

          <textarea
            id="text"
            className={`${classes.textarea} ${
              errors.text ? classes.inputError : ""
            }`}
            {...register("text", {
              validate: {
                notEmpty: (value) =>
                  !isEmpty(trim(value ?? "")) || t("TEXT_REQUIRED"),
                maxLength: (value) =>
                  (value ?? "").length <= MAX_TEXT_LENGTH ||
                  t("TEXT_MAX_LENGTH", {
                    MAX_LENGTH: MAX_TEXT_LENGTH,
                  }),
              },
            })}
          />

          {errors.text && (
            <p className={classes.error}>{errors.text.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="media">
            {t("MEDIA")}
          </label>

          <input
            id="media"
            className={`${classes.input} ${
              errors.media ? classes.inputError : ""
            }`}
            {...register("media", {
              validate: (value) =>
                !value ||
                !trim(value) ||
                /^https?:\/\/.+/.test(trim(value)) ||
                t("MEDIA_INVALID"),
            })}
          />

          {errors.media && (
            <p className={classes.error}>{errors.media.message}</p>
          )}
        </div>

        {isUpdateError && (
          <p className={classes.serverError} role="alert">
            {t("UPDATE_ERROR")}
          </p>
        )}

        {isSuccess && (
          <p className={classes.success} role="status">
            {t("UPDATE_SUCCESS")}
          </p>
        )}

        <button className={classes.button} type="submit" disabled={isPending}>
          {isPending ? t("UPDATING") : t("SUBMIT")}
        </button>

        {isPending && (
          <div className={classes.loader}>
            <ContentLoader
              speed={1.5}
              width="100%"
              height={24}
              viewBox="0 0 400 24"
              backgroundColor="var(--skeleton-bg)"
              foregroundColor="var(--skeleton-fg)"
            >
              <rect x="0" y="6" rx="4" ry="4" width="400" height="12" />
            </ContentLoader>
          </div>
        )}
      </form>
    </div>
  );
};

export { EditPost };
