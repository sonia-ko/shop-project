import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  btnStyle: "light" | "green" | "gray";
}

const Button: React.FC<ButtonProps> = ({ btnText, onClick, btnStyle }) => {
  return (
    <button onClick={onClick} className={classes[btnStyle]}>
      {btnText}
    </button>
  );
};

export default Button;
