import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import type { CreateUserPayload } from "@libs/types/user/userPayload.type";
import { useStyles } from "./styles";
import { isEmpty, trim } from "lodash/fp";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";

const CreateUser: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "createUser" });

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

  const queryClient = useQueryClient();

  const {
    mutate: create,
    isError,
    isPending,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS });
    },
  });

  const onSubmit = ({ username, displayedName }: CreateUserPayload): void => {
    create({
      username: trim(username),
      displayedName: trim(displayedName),
    });
  };

  return (
    <div className={classes.createUser}>
      <h1 className={classes.title}>{t("title")}</h1>

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="username">
            {t("username")}
          </label>

          <input
            id="username"
            className={`${classes.input} ${
              errors.username && classes.inputError
            }`}
            autoComplete="username"
            {...register("username", {
              required: t("usernameRequired"),
              validate: (value) =>
                !isEmpty(trim(value)) || t("usernameRequired"),
            })}
            aria-invalid={Boolean(errors.username)}
          />

          {errors.username && (
            <p className={classes.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={classes.field}>
          <label className={classes.label} htmlFor="displayedName">
            {t("displayedName")}
          </label>

          <input
            id="displayedName"
            className={`${classes.input} ${
              errors.displayedName && classes.inputError
            }`}
            {...register("displayedName", {
              required: t("displayedNameRequired"),
              validate: (value) =>
                !isEmpty(trim(value)) || t("displayedNameRequired"),
            })}
            aria-invalid={Boolean(errors.displayedName)}
          />

          {errors.displayedName && (
            <p className={classes.error}>{errors.displayedName.message}</p>
          )}
        </div>

        {isError && (
          <p className={classes.serverError} role="alert">
            {error.message || t("createError")}
          </p>
        )}

        {isSuccess && (
          <p className={classes.success} role="status">
            {t("createSuccess")}
          </p>
        )}

        <button className={classes.button} type="submit" disabled={isPending}>
          {isPending ? t("creating") : t("submit")}
        </button>

        {isPending && (
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
    </div>
  );
};

export { CreateUser };
