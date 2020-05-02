import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(90deg, #0099FF 0%, #1053FF 78.65%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  fullWidth: {
    width: "100%",
  },
  margin: {
    margin: '20px 0 0 0',
  },
});

export const ButtonComponent = memo(
  ({ text, type, fullWidth, margin, gradient, disabled, onClick }) => {
    const classes = useStyles();
    return (
      <Button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
      ${gradient && classes.root}
      ${fullWidth && classes.fullWidth}
      ${margin && classes.margin}
    `}
      >
        {text}
      </Button>
    );
  }
);
