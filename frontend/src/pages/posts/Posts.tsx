import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { usePosts } from "./functions";
import { filter, startsWith, toLower, trim } from "lodash/fp";
import { useStyles } from "./styles";
import SearchPost from "./searchPost";

const Posts: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { data: posts = [], isLoading, isError } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = filter(
    ({ postName }) => startsWith(toLower(trim(searchTerm)), toLower(postName)),
    posts,
  );

  console.log("Posts:", posts);
  console.log("Search term:", searchTerm);
  console.log("Filtered posts:", filteredPosts);

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>{t("posts.title")}</h1>

      <SearchPost searchTerm={searchTerm} onSearchChange={setSearchTerm} />

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
      ) : filteredPosts.length === 0 ? (
        <p className={classes.message}>
          {searchTerm.trim() ? t("posts.noSearchResults") : t("posts.empty")}
        </p>
      ) : (
        <div className={classes.list}>
          {filteredPosts.map((post) => (
            <article key={post._id} className={classes.postCard}>
              <h2 className={classes.postName}>{post.postName}</h2>{" "}
              {post.media && (
                <img
                  className={classes.media}
                  src={post.media}
                  alt={post.postName}
                />
              )}
              <p className={classes.postText}>{post.text}</p>
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
