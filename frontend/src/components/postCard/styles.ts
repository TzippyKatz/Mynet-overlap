import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  postCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: 30,
    border: "1px solid #dce8d6",
    borderRadius: 20,
    backgroundColor: "#edf4e9",
    boxShadow: "0 8px 24px rgba(55, 75, 52, 0.045)",
    overflowWrap: "anywhere",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 14px 32px rgba(55, 75, 52, 0.10)",
    },
  },
  postName: {
    margin: "0 0 18px",
    color: "#35483a",
    fontSize: 24,
    fontWeight: 750,
    lineHeight: 1.35,
    letterSpacing: -0.5,
  },
  postText: {
    flex: 1,
    margin: "0 0 24px",
    color: "#5f5a68",
    fontSize: 15,
    lineHeight: 1.9,
    whiteSpace: "pre-wrap",
  },
  media: {
    display: "block",
    width: "100%",
    height: 260,
    marginBottom: 22,
    borderRadius: 14,
    objectFit: "cover",
    backgroundColor: "#f3edf8",
  },
  likes: {
    margin: 0,
    paddingTop: 18,
    borderTop: "1px solid rgba(53, 72, 58, 0.14)",
    color: "#777180",
    fontSize: 14,
    fontWeight: 600,
  },
});
