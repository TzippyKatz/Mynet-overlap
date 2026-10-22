import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  createUser: {
    width: 580,
    margin: "48px auto",
    padding: 36,
    color: "#282634",
    backgroundColor: "#fffefa",
    border: "1px solid #e9e2eb",
    borderRadius: 22,
    boxShadow: "0 12px 38px rgba(50, 44, 61, 0.07)",
  },
  title: {
    margin: "0 0 30px",
    color: "#51416f",
    fontSize: 34,
    fontWeight: 750,
    letterSpacing: -0.8,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 22,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 9,
  },
  label: {
    color: "#514d5a",
    fontSize: 14,
    fontWeight: 650,
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #e7e0eb",
    borderRadius: 12,
    backgroundColor: "#fffefa",
    color: "#282634",
    fontSize: 15,
    "&::placeholder": {
      color: "#918b99",
    },
    "&:focus": {
      outline: "none",
      borderColor: "#b7a6d2",
      boxShadow: "0 0 0 4px rgba(183, 166, 210, 0.16)",
    },
  },
  inputError: {
    borderColor: "#d77b89",
  },
  error: {
    margin: 0,
    color: "#a44555",
    fontSize: 13,
  },
  serverError: {
    padding: 14,
    color: "#9b4656",
    backgroundColor: "#fff0f0",
    border: "1px solid #f1d6d9",
    borderRadius: 12,
  },
  success: {
    padding: 14,
    color: "#416447",
    backgroundColor: "#eef5e9",
    border: "1px solid #dbe8d3",
    borderRadius: 12,
  },
  button: {
    padding: "15px 20px",
    border: "none",
    borderRadius: 12,
    backgroundColor: "#d7c9eb",
    color: "#382e4b",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background-color 180ms ease, transform 180ms ease",
    "&:hover": {
      backgroundColor: "#cbb9e3",
      transform: "translateY(-1px)",
    },
    "&:disabled": {
      opacity: 0.55,
      cursor: "not-allowed",
      transform: "none",
    },
  },
});
