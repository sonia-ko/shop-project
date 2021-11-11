import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  btnText: string;
  onClick: () => void;
  btnStyle: "light" | "green" | "gray";
  btnIconBefore?: string;
  btnIconAfter?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnIconBefore,
  btnText,
  onClick,
  btnStyle,
  btnIconAfter,
}) => {
  return (
    <button onClick={onClick} className={classes[btnStyle]}>
      {btnIconBefore ? (
        <img
          className={classes.btnIconBefore}
          src={btnIconBefore}
          alt="button icon"
        />
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
