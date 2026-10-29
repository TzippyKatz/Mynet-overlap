import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  postCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: 30,
    border: "1px solid var(--post-border)",
    borderRadius: 20,
    backgroundColor: "var(--surface-muted)",
    boxShadow: "var(--shadow)",
    overflowWrap: "anywhere",
    transition: "transform 180ms ease, box-shadow 180ms ease",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "var(--shadow-hover)",
    },
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingBottom: 18,
    marginBottom: 18,
    borderBottom: "1px solid var(--post-muted-border)",
  },

  user: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    minWidth: 0,
    padding: 0,
    border: "none",
    background: "transparent",
    color: "var(--text-secondary)",
    cursor: "pointer",
    font: "inherit",

    "&:hover": {
      color: "var(--primary-color)",
    },

    "& span": {
      fontSize: 14,
      fontWeight: 600,
      overflowWrap: "anywhere",
    },
  },

  avatar: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "var(--secondary-bg)",
    color: "var(--primary-color)",
    flexShrink: 0,
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
  },

  editButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 8,
    background: "transparent",
    color: "var(--text-secondary)",
    cursor: "pointer",
    padding: 6,
    transition: "background-color 150ms ease, color 150ms ease",

    "&:hover": {
      backgroundColor: "var(--secondary-bg)",
      color: "var(--primary-color)",
    },
  },

  deleteButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: 8,
    background: "transparent",
    color: "var(--danger-icon)",
    cursor: "pointer",
    padding: 6,
    transition: "background-color 150ms ease",

    "&:hover": {
      backgroundColor: "var(--secondary-bg)",
    },
  },

  postName: {
    margin: 0,
    paddingBottom: 18,
    color: "var(--post-text)",
    fontSize: 24,
    fontWeight: 750,
    lineHeight: 1.35,
    letterSpacing: -0.5,
    borderBottom: "1px solid var(--post-muted-border)",
  },

  postText: {
    flex: 1,
    margin: 0,
    padding: "18px 0 24px",
    color: "var(--text-secondary)",
    fontSize: 15,
    lineHeight: 1.9,
    whiteSpace: "pre-wrap",
    borderBottom: "1px solid var(--post-muted-border)",
  },

  media: {
    display: "block",
    width: "100%",
    height: 260,
    margin: "18px 0 0",
    borderRadius: 14,
    objectFit: "cover",
    backgroundColor: "var(--media-bg)",
  },

  pdfLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
    margin: "18px 0 22px",
    padding: 14,
    border: "1px solid var(--post-muted-border)",
    borderRadius: 12,
    backgroundColor: "var(--secondary-bg)",
    color: "var(--post-text)",
    textDecoration: "none",
    transition: "background-color 150ms ease",

    "&:hover": {
      backgroundColor: "var(--media-bg)",
    },
  },

  pdfIcon: {
    color: "var(--danger-icon)",
    flexShrink: 0,
  },

  pdfInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    minWidth: 0,
    flex: 1,

    "& strong": {
      fontSize: 14,
      fontWeight: 600,
      overflowWrap: "anywhere",
    },

    "& small": {
      color: "var(--text-secondary)",
      fontSize: 12,
    },
  },

  pdfExternalIcon: {
    color: "var(--text-secondary)",
    flexShrink: 0,
  },

  likes: {
    margin: 0,
    paddingTop: 18,
    color: "var(--text-secondary)",
    fontSize: 14,
    fontWeight: 600,
  },
});
