import classes from "./GrayButton.module.css";
import React from "react";

const GrayButton: React.FC<{
  btnText: string;
  onClick: () => void;
}> = (props) => {
  return (
    <button onClick={props.onClick} className={classes.buttonGray}>
      {props.btnText}
    </button>
  );
};

export default GrayButton;
