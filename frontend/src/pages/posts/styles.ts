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
    gap: 16,
  },
  postCard: {
    padding: 16,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    overflowWrap: "anywhere",
  },
  postName: {
    margin: "0 0 12px",
    fontSize: 20,
  },
  postText: {
    margin: "0 0 12px",
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
  },
  mediaLink: {
    display: "inline-block",
    marginBottom: 12,
    color: "#2563eb",
    overflowWrap: "anywhere",
  },
  likes: {
    margin: 0,
    color: "#6b7280",
    fontSize: 14,
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
  skeleton: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
