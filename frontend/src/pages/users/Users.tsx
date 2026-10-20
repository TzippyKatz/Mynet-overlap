import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { useUsers } from "./functions";
import { usersStyles } from "./styles";

const Users: FC = () => {
  const { t } = useTranslation();
  const { users, isLoading, error } = useUsers();

  return (
    <main style={usersStyles.container}>
      <h1 style={usersStyles.title}>{t("users.title")}</h1>

      {isLoading ? (
        <div style={usersStyles.list}>
          {[1, 2, 3].map((item) => (
            <ContentLoader
              key={item}
              speed={1.5}
              width="100%"
              height={76}
              viewBox="0 0 400 76"
              backgroundColor="#f3f4f6"
              foregroundColor="#e5e7eb"
            >
              <rect x="0" y="12" rx="4" ry="4" width="180" height="14" />
              <rect x="0" y="38" rx="4" ry="4" width="260" height="10" />
            </ContentLoader>
          ))}
        </div>
      ) : error ? (
        <p style={usersStyles.error}>{t("users.loadError")}</p>
      ) : users.length === 0 ? (
        <p style={usersStyles.message}>{t("users.empty")}</p>
      ) : (
        <div style={usersStyles.list}>
          {users.map((user) => (
            <article key={user._id} style={usersStyles.userCard}>
              <h2 style={usersStyles.displayedName}>{user.displayedName}</h2>
              <p style={usersStyles.username}>@{user.username}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export { Users };
