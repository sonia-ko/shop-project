import React from "react";
import classes from "./GreenButton.module.css";

const GreenButton: React.FC<{
  btnText: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.buttonGreen}>
      {props.btnText}
    </button>
  );
};

export default GreenButton;
