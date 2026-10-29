import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  createUser: {
    width: 580,
    margin: "48px auto",
    padding: 36,
    color: "var(--text-primary)",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 22,
    boxShadow: "var(--shadow)",
  },
  title: {
    margin: "0 0 30px",
    color: "var(--text-accent)",
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
    color: "var(--text-secondary)",
    fontSize: 14,
    fontWeight: 650,
  },
  input: {
    boxSizing: "border-box",
    width: "100%",
    padding: "14px 16px",
    border: "1px solid var(--border)",
    borderRadius: 12,
    backgroundColor: "var(--surface)",
    color: "var(--text-primary)",
    fontSize: 15,
    "&::placeholder": {
      color: "var(--placeholder)",
    },
    "&:focus": {
      outline: "none",
      borderColor: "var(--focus-border)",
      boxShadow: "var(--focus-shadow)",
    },
  },
  inputError: {
    borderColor: "var(--danger-border)",
  },
  error: {
    margin: 0,
    color: "var(--danger)",
    fontSize: 13,
  },
  serverError: {
    padding: 14,
    color: "var(--danger)",
    backgroundColor: "var(--danger-surface)",
    border: "1px solid var(--danger-border)",
    borderRadius: 12,
  },
  success: {
    padding: 14,
    color: "var(--success)",
    backgroundColor: "var(--success-surface)",
    border: "1px solid var(--success-border)",
    borderRadius: 12,
  },
  button: {
    padding: "15px 20px",
    border: "none",
    borderRadius: 12,
    backgroundColor: "var(--accent-button)",
    color: "var(--accent-button-text)",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background-color 180ms ease, transform 180ms ease",
    "&:hover": {
      backgroundColor: "var(--accent-button-hover)",
      transform: "translateY(-1px)",
    },
    "&:disabled": {
      opacity: 0.55,
      cursor: "not-allowed",
      transform: "none",
    },
  },
});
