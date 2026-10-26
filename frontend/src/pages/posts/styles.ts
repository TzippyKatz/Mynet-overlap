import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  posts: {
    width: "100%",
    maxWidth: "none",
    margin: 0,
    padding: "56px 56px",
    boxSizing: "border-box",
    color: "var(--text-primary)",
  },
  title: {
    margin: "0 0 36px",
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: -1.8,
    color: "var(--text-heading)",
    textAlign: "center",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 24,
    alignItems: "stretch",
  },
  message: {
    padding: "32px 0",
    color: "var(--text-secondary)",
    fontSize: 16,
    lineHeight: 1.7,
  },
  error: {
    padding: 20,
    color: "var(--danger)",
    backgroundColor: "var(--danger-surface)",
    border: "1px solid var(--danger-border)",
    borderRadius: 16,
  },
  skeleton: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 24,
  },
});
