import React from "react";
import classes from "./Checkbox.module.css";

interface CheckBoxProps {
  item: string;
  handleClick?: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ item, handleClick, children }) => {
  return (
    <label htmlFor={"input" + item} className={classes.container}>
      <input
        onClick={handleClick}
        className={classes.input}
        key={"input" + item}
        type="checkbox"
        id={"input" + item}
      />
      <span className={classes.option}>{children}</span>
    </label>
  );
};

export default CheckBox;
