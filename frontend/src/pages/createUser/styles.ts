import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    maxWidth: 480,
    margin: "0 auto",
    padding: 24,
  },
  title: {
    marginBottom: 24,
    fontSize: 28,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
  input: {
    padding: 12,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    fontSize: 16,
    "&:focus": {
      outline: "2px solid #93c5fd",
      outlineOffset: 1,
    },
  },
  inputError: {
    borderColor: "#b91c1c",
  },
  error: {
    margin: 0,
    color: "#b91c1c",
    fontSize: 13,
  },
  serverError: {
    padding: 12,
    color: "#b91c1c",
    backgroundColor: "#fef2f2",
    borderRadius: 6,
  },
  success: {
    padding: 12,
    color: "#166534",
    backgroundColor: "#f0fdf4",
    borderRadius: 6,
  },
  button: {
    padding: 12,
    border: "none",
    borderRadius: 6,
    backgroundColor: "#2563eb",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});
