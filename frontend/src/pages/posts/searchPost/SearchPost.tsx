import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "./styles";
import type { PostSearchProps } from "../../../utils/types/content/searchProps.type";

const SearchPost: FC<PostSearchProps> = ({ searchTerm, onSearchChange }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <input
      className={classes.searchInput}
      type="search"
      placeholder={t("posts.searchPlaceholder")}
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
};

export { SearchPost };
