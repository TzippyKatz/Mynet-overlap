import { useState } from "react";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import type { CreateUserPayload } from "@libs/types/user/userPayload.type.js";
import { useCreateUser } from "./functions";
import { useStyles } from "./styles";

const CreateUser: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const createUserMutation = useCreateUser();
  const [isCreated, setIsCreated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUserPayload>({
    defaultValues: {
      username: "",
      displayedName: "",
    },
  });

  const onSubmit = (data: CreateUserPayload) => {
    setIsCreated(false);

    createUserMutation.mutate(
      {
        username: data.username.trim(),
        displayedName: data.displayedName.trim(),
      },
      {
        onSuccess: () => {
          reset();
          setIsCreated(true);
        },
      },
    );
  };

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("createUser.title")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="username">
            {t("createUser.username")}
          </label>

          <input
            id="username"
            className={`${classes.input} ${
              errors.username ? classes.inputError : ""
            }`}
            autoComplete="username"
            {...register("username", {
              required: t("createUser.usernameRequired"),
              validate: (value) =>
                value.trim().length > 0 || t("createUser.usernameRequired"),
            })}
            aria-invalid={Boolean(errors.username)}
          />

          {errors.username && (
            <p className={classes.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="displayedName">
            {t("createUser.displayedName")}
          </label>

          <input
            id="displayedName"
            className={`${classes.input} ${
              errors.displayedName ? classes.inputError : ""
            }`}
            {...register("displayedName", {
              required: t("createUser.displayedNameRequired"),
              validate: (value) =>
                value.trim().length > 0 ||
                t("createUser.displayedNameRequired"),
            })}
            aria-invalid={Boolean(errors.displayedName)}
          />

          {errors.displayedName && (
            <p className={classes.error}>{errors.displayedName.message}</p>
          )}
        </div>

        {createUserMutation.isError && (
          <p className={classes.serverError} role="alert">
            {createUserMutation.error.message || t("createUser.createError")}
          </p>
        )}

        {isCreated && (
          <p className={classes.success} role="status">
            {t("createUser.createSuccess")}
          </p>
        )}

        <button
          className={classes.button}
          type="submit"
          disabled={createUserMutation.isPending}
        >
          {createUserMutation.isPending
            ? t("createUser.creating")
            : t("createUser.submit")}
        </button>

        {createUserMutation.isPending && (
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
        )}
      </form>
    </main>
  );
};

export { CreateUser };
