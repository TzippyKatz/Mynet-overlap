import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
    padding: 16,
    backgroundColor: "#1f2937",
  },
  link: {
    padding: "10px 14px",
    border: "none",
    borderRadius: 6,
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: 15,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#374151",
    },
  },
});
