import React from "react";
import classes from "./Checkbox.module.css";

const CheckBox: React.FC<{
  item: string;
}> = (props) => {
  return (
    <label htmlFor={"input" + props.item} className={classes.checkbox}>
      <input
        className={classes.input}
        key={"input" + props.item}
        type="checkbox"
        id={"input" + props.item}
      />
      <span className={classes.checkboxOption}>{props.children}</span>
    </label>
  );
};

export default CheckBox;
