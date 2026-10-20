
import type { CSSProperties } from "react";

export const usersStyles: Record<string, CSSProperties> = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "24px",
  },
  title: {
    marginBottom: "24px",
    fontSize: "28px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  userCard: {
    padding: "16px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
  },
  displayedName: {
    margin: "0 0 6px",
    fontSize: "18px",
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
    padding: "16px",
    color: "#b91c1c",
    backgroundColor: "#fef2f2",
    borderRadius: "8px",
  },
};
