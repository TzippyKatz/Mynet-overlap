import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    "&:hover": {
      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
      transform: "translateY(-2px)",
    },
  },
  avatar: {
    width: "46px",
    height: "46px",
    minWidth: "46px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfe0e2",
    color: "#6a9679",
    "& img": {
      width: "24px",
      height: "24px",
    },
  },
  userIcon: {
    width: "24px",
    height: "24px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  displayedName: {
    margin: "0 0 10px",
    color: "#35483a",
    fontSize: 22,
    fontWeight: 750,
    lineHeight: 1.4,
    letterSpacing: -0.3,
    overflowWrap: "anywhere",
  },
  username: {
    margin: 0,
    color: "#777180",
    fontSize: 14,
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },
});
