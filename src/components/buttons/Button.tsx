import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  btnStyle: "light" | "green" | "gray";
  btnIcon?: string;
  btnIconAfter?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnIcon,
  btnText,
  onClick,
  btnStyle,
  btnIconAfter,
}) => {
  return (
    <button onClick={onClick} className={classes[btnStyle]}>
      {btnIcon ? (
        <img className={classes.btnIcon} src={btnIcon} alt="button icon" />
      ) : (
        ""
      )}
      {btnText}
      {btnIconAfter ? (
        <img
          className={classes.btnIconAfter}
          src={btnIconAfter}
          alt="button icon"
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
