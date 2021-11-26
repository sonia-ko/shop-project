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
    <form className={classes.container}>
      <input
        className={classes.input}
        key={item}
        type="checkbox"
        id={item}
        onChange={() => {
          handleClick();
          setChecked(!checked);
          console.log(checked);
        }}
        checked={checked}
      />
      <label
        onClick={() => setChecked(!checked)}
        className={classes.label}
        htmlFor={item}
      >
        <span className={classes.option}>{children}</span>
      </label>
    </form>
  );
};

export default CheckBox;
