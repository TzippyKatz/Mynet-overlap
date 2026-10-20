import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    maxWidth: 800,
    margin: "0 auto",
    padding: 24,
  },
  title: {
    marginBottom: 24,
    fontSize: 28,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  userCard: {
    padding: 16,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    backgroundColor: "#ffffff",
  },
  displayedName: {
    margin: "0 0 6px",
    fontSize: 18,
    fontWeight: 600,
  },
  username: {
    margin: 0,
    color: "#6b7280",
  },
  message: {
    padding: "16px 0",
    color: "#6b7280",
  },
  error: {
    padding: 16,
    color: "#b91c1c",
    backgroundColor: "#fef2f2",
    borderRadius: 8,
  },
});
