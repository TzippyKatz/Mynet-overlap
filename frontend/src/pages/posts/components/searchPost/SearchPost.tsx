import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import type { PostSearchProps } from "./searchProps.types";

const SearchPost: FC<PostSearchProps> = ({ searchTerm, onSearchChange }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <input
      className={classes.searchInput}
      type="search"
      placeholder={t("POSTS.SEARCH_PLACEHOLDER")}
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
};

export { SearchPost };
