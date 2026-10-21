import { useState } from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import type { CreatePostPayload } from "@libs/types/content/postPayload.type.js";
import { useCreatePost } from "./functions";
import { useStyles } from "./styles";
import type { CreatePostProps } from "../../utils/types/content/props.type";

const CreatePost: FC<CreatePostProps> = ({ userId }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const createPostMutation = useCreatePost();
  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostPayload>({
    defaultValues: {
      postName: "",
      userId,
      text: "",
      media: "",
    },
  });

  const onSubmit = (data: CreatePostPayload) => {
    setIsCreated(false);

    const { media, ...postData } = data;

    createPostMutation.mutate(
      {
        ...postData,
        postName: data.postName.trim(),
        text: data.text.trim(),
        userId,
        ...(media?.trim() ? { media: media.trim() } : {}),
      },
      {
        onSuccess: () => {
          reset({
            postName: "",
            userId,
            text: "",
            media: "",
          });
          setIsCreated(true);
        },
      },
    );
  };

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("createPost.title")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="postName">
            {t("createPost.postName")}
          </label>

          <input
            id="postName"
            className={`${classes.input} ${
              errors.postName ? classes.inputError : ""
            }`}
            {...register("postName", {
              required: t("createPost.postNameRequired"),
              validate: (value) =>
                value.trim().length > 0 || t("createPost.postNameRequired"),
            })}
          />

          {errors.postName && (
            <p className={classes.error}>{errors.postName.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="text">
            {t("createPost.text")}
          </label>

          <textarea
            id="text"
            className={`${classes.textarea} ${
              errors.text ? classes.inputError : ""
            }`}
            {...register("text", {
              required: t("createPost.textRequired"),
              validate: {
                notEmpty: (value) =>
                  value.trim().length > 0 || t("createPost.textRequired"),
                maxLength: (value) =>
                  value.length <= 200 || t("createPost.textMaxLength"),
              },
            })}
          />

          {errors.text && (
            <p className={classes.error}>{errors.text.message}</p>
          )}
        </div>

        <div className={classes.field}>
          <label className={classes.label} htmlFor="media">
            {t("createPost.media")}
          </label>

          <input
            id="media"
            className={`${classes.input} ${
              errors.media ? classes.inputError : ""
            }`}
            {...register("media", {
              validate: (value) =>
                !value ||
                /^https?:\/\/.+/.test(value) ||
                t("createPost.mediaInvalid"),
            })}
          />

          {errors.media && (
            <p className={classes.error}>{errors.media.message}</p>
          )}
        </div>

        {createPostMutation.isError && (
          <p className={classes.serverError} role="alert">
            {t("createPost.createError")}
          </p>
        )}

        {isCreated && (
          <p className={classes.success} role="status">
            {t("createPost.createSuccess")}
          </p>
        )}

        <button
          className={classes.button}
          type="submit"
          disabled={createPostMutation.isPending}
        >
          {createPostMutation.isPending
            ? t("createPost.creating")
            : t("createPost.submit")}
        </button>

        {createPostMutation.isPending && (
          <div className={classes.loader}>
            <ContentLoader
              speed={1.5}
              width="100%"
              height={24}
              viewBox="0 0 400 24"
              backgroundColor="#f3f4f6"
              foregroundColor="#e5e7eb"
            >
              <rect x="0" y="6" rx="4" ry="4" width="400" height="12" />
            </ContentLoader>
          </div>
        )}
      </form>
    </main>
  );
};

export { CreatePost };
