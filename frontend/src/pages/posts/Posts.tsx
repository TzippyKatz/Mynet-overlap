import { useState, type FC } from "react";
import { useTranslation } from "react-i18next";
import ContentLoader from "react-content-loader";
import { filter, isEmpty, map, startsWith, toLower, trim } from "lodash/fp";
import { useStyles } from "./styles";
import SearchPost from "./components/searchPost";
import { useQuery } from "@tanstack/react-query";
import { contentService } from "../../services/content/content.service";
import { QUERY_KEYS } from "../../utils/queryKeys";
import { times } from "lodash/fp";
import { POSTS_SKELETON_COUNT } from "./const";
import PostCard from "../../components/postCard";

const Posts: FC = () => {
  const classes = useStyles();
  const { t } = useTranslation("translation", { keyPrefix: "POSTS" });
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: contentService.getPosts,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = filter(
    ({ postName }) => startsWith(toLower(trim(searchTerm)), toLower(postName)),
    posts,
  );

  return (
    <div className={classes.posts}>
      <h1 className={classes.title}>{t("TITLE")}</h1>

      <SearchPost searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {isLoading ? (
        <div className={classes.skeleton}>
          {times(
            (item) => (
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
            ),
            POSTS_SKELETON_COUNT,
          )}
        </div>
      ) : isError ? (
        <p className={classes.error} role="alert">
          {t("LOAD_ERROR")}
        </p>
      ) : isEmpty(filteredPosts) ? (
        <p className={classes.message}>
          {trim(searchTerm) ? t("NO_SEARCH_RESULTS") : t("EMPTY")}
        </p>
      ) : (
        <div className={classes.list}>
          {map(
            (post) => (
              <PostCard key={post._id} post={post} />
            ),
            filteredPosts,
          )}
        </div>
      )}
    </div>
  );
};

export { Posts };
