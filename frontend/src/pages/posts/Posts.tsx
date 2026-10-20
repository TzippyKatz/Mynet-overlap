import type { FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { usePosts } from "./functions";
import { useStyles } from "./styles";

const Posts: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: posts = [], isLoading, isError } = usePosts();

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("posts.title")}</h1>

      {isLoading ? (
        <div className={classes.skeleton}>
          {[1, 2, 3].map((item) => (
            <ContentLoader
              key={item}
              speed={1.5}
              width="100%"
              height={120}
              viewBox="0 0 400 120"
              backgroundColor="#f3f4f6"
              foregroundColor="#e5e7eb"
            >
              <rect x="0" y="8" rx="4" ry="4" width="220" height="16" />
              <rect x="0" y="40" rx="4" ry="4" width="400" height="10" />
              <rect x="0" y="60" rx="4" ry="4" width="320" height="10" />
              <rect x="0" y="92" rx="4" ry="4" width="80" height="10" />
            </ContentLoader>
          ))}
        </div>
      ) : isError ? (
        <p className={classes.error} role="alert">
          {t("posts.loadError")}
        </p>
      ) : posts.length === 0 ? (
        <p className={classes.message}>{t("posts.empty")}</p>
      ) : (
        <div className={classes.list}>
          {posts.map((post) => (
            <article key={post._id} className={classes.postCard}>
              <h2 className={classes.postName}>{post.postName}</h2>

              <p className={classes.postText}>{post.text}</p>

              {post.media && (
                <a
                  className={classes.mediaLink}
                  href={post.media}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("posts.viewMedia")}
                </a>
              )}

              <p className={classes.likes}>
                {t("posts.likes", { count: post.likes })}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export { Posts };
