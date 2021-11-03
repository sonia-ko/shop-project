import React from "react";
import classes from "./Checkbox.module.css";

interface CheckBoxProps {
  item: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ item, children }) => {
  return (
    <label htmlFor={"input" + item} className={classes.checkbox}>
      <input
        className={classes.input}
        key={"input" + item}
        type="checkbox"
        id={"input" + item}
      />
      <span className={classes.checkboxOption}>{children}</span>
    </label>
  );
};

export default CheckBox;
