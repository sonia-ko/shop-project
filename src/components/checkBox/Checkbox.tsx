import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classes from "./Checkbox.module.css";

interface CheckBoxProps {
  item: string;
  handleClick: () => void;
  category: "farm" | "rate";
}

const CheckBox: React.FC<CheckBoxProps> = ({
  item,
  handleClick,
  children,
  category,
}) => {
  const [checked, setChecked] = useState(false);

  const filters = useSelector(
    (state: RootState) => state.products.filters[category]
  );

  useEffect(() => {
    if (filters.length === 0) {
      setChecked(false);
    }
  }, [filters]);

  return (
    <label htmlFor={"input" + item} className={classes.container}>
      <input
        onChange={() => {
          handleClick();
          setChecked(!checked);
        }}
        className={classes.input}
        key={"input" + item}
        type="checkbox"
        id={"input" + item}
        checked={checked}
      />
      <span className={classes.option}>{children}</span>
    </label>
  );
};

export default CheckBox;
