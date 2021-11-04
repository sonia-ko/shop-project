import React from "react";
import { brands } from "../../static/Partners";
import CheckBox from "../checkbox/Checkbox";

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