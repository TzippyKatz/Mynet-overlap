import { createUseStyles } from "react-jss";
import { down } from "../../utils/styles/breakpoints";

export const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    padding: "18px 56px",
    backgroundColor: "var(--surface)",
    borderBottom: "1px solid var(--border)",
    boxShadow: "var(--nav-shadow)",
    [down("phone")]: {
      flexWrap: "wrap",
      gap: 4,
      padding: "12px 16px",
    },
  },
  link: {
    padding: "11px 17px",
    border: "1px solid transparent",
    borderRadius: 999,
    backgroundColor: "transparent",
    color: "var(--text-secondary)",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 180ms ease, color 180ms ease",
    "&:hover": {
      color: "var(--nav-hover-text)",
      backgroundColor: "var(--nav-hover)",
      borderColor: "var(--border-muted)",
    },
  },
  themeToggle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginLeft: "auto",
    padding: "11px 17px",
    border: "1px solid var(--border)",
    borderRadius: 999,
    backgroundColor: "var(--surface)",
    color: "var(--text-primary)",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--nav-hover)",
    },
    [down("phone")]: {
      marginLeft: 0,
    },
  },
});
