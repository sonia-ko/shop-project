import React from "react";
import classes from "./ButtonLight.module.css";

const ButtonLight: React.FC<{
  btnText: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.buttonLight}>
      {props.btnText}
    </button>
  );
};

export default ButtonLight;
