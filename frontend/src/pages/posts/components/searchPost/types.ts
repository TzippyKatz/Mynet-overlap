import type { Function1 } from "lodash";

export type PostSearchProps = {
  searchTerm: string;
  onSearchChange: Function1<string, void>;
};
