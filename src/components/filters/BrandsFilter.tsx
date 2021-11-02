import React from "react";
import { brands } from "../../Config";
import CheckBox from "../Checkbox/Checkbox";

const BrandsFilter: React.FC = () => {
  return (
    <>
      <h3>Brands</h3>

      <div>
        {brands.map((item, i) => {
          return (
            <CheckBox key={"input" + item} item={item}>
              {item}
            </CheckBox>
          );
        })}
      </div>
    </>
  );
};

export default BrandsFilter;
