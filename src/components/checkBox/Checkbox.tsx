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
    <div className={classes.container}>
      <input
        className={classes.input}
        onChange={() => {
          handleClick();
          setChecked(!checked);
        }}
        key={item}
        type="checkbox"
        id={item}
        checked={checked}
      />
      <label className={classes.label} htmlFor={item}>
        <span className={classes.option}>{children}</span>
      </label>
    </div>
  );
};

export default CheckBox;
