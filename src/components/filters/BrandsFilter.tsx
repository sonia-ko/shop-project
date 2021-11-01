import React from "react";
import { brands } from "../../Config";
import classes from "./BrandsFilter.module.css";

const BrandsFilter: React.FC = () => {
  return (
    <>
      <h3>Brands</h3>

      <div>
        {brands.map((item, i) => {
          return (
            <label
              key={"input" + item}
              htmlFor={"input" + item}
              className={classes.checkbox}
            >
              <input
                className={classes.input}
                key={"input" + item}
                type="checkbox"
                id={"input" + item}
              />
              <span className={classes.checkboxOption}>{item}</span>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default BrandsFilter;
