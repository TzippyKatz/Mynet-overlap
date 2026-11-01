import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  profile: {
    maxWidth: 600,
    margin: "40px auto",
    padding: 32,
    borderRadius: 16,
    background: "var(--card-bg)",
    border: "1px solid var(--border-color)",
    textAlign: "center",
  },
  avatar: {
    width: 96,
    height: 96,
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "var(--secondary-bg)",
    color: "var(--text-color)",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  displayedName: {
    margin: 0,
    fontSize: 28,
  },
  username: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    color: "var(--secondary-text-color)",
  },
});
