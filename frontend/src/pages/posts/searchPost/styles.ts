import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  searchInput: {
    display: "block",
    width: "100%",
    maxWidth: 620,
    boxSizing: "border-box",
    padding: "16px 20px",
    margin: "0 auto 36px",
    border: "1px solid #e7e0eb",
    borderRadius: 14,
    backgroundColor: "#fffefa",
    color: "#282634",
    fontSize: 16,
    boxShadow: "0 6px 20px rgba(50, 44, 61, 0.04)",
    "&::placeholder": {
      color: "#918b99",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#a9c29f",
      boxShadow: "0 0 0 4px rgba(169, 194, 159, 0.2)",
    },
  },
});
