import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchInput: {
    display: "block",
    width: "100%",
    maxWidth: 620,
    boxSizing: "border-box",
    padding: "16px 20px",
    margin: "0 auto 36px",
    border: "1px solid var(--border)",
    borderRadius: 14,
    backgroundColor: "var(--surface)",
    color: "var(--text-primary)",
    fontSize: 16,
    boxShadow: "var(--nav-shadow)",
    "&::placeholder": {
      color: "var(--placeholder)",
    },
    "&:focus": {
      outline: "none",
      borderColor: "var(--focus-border)",
      boxShadow: "var(--focus-shadow)",
    },
  },
});
