import type { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import type { LoginPayload } from "@libs/types/user/userPayload.type.js";
import { userService } from "../../services/user/user.service";

const Login: FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "LOGIN" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const loginMutation = useMutation({
    mutationFn: userService.login,
    onSuccess: (result) => {
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/posts");
    },
  });

  const onSubmit = (data: LoginPayload): void => {
    loginMutation.mutate(data);
  };

  return (
    <main className={classes.login}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={classes.title}>{t("TITLE")}</h1>

        <div className={classes.field}>
          <input
            id="username"
            className={classes.input}
            type="text"
            placeholder={t("USERNAME_PLACEHOLDER")}
            {...register("username", {
              required: t("USERNAME_REQUIRED"),
            })}
          />
        </div>

        {errors.username && (
          <p className={classes.error}>{errors.username.message}</p>
        )}

        {loginMutation.isError && (
          <p className={classes.error}>{t("LOGIN_ERROR")}</p>
        )}

        <button
          className={classes.button}
          type="submit"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? t("LOGGING_IN") : t("SUBMIT")}
        </button>

        <p className={classes.message}>
          {t("REGISTER_PROMPT")}{" "}
          <button
            className={classes.link}
            type="button"
            onClick={() => navigate("/users/create")}
          >
            {t("REGISTER_LINK")}
          </button>
        </p>
      </form>
    </main>
  );
};

export { Login };
