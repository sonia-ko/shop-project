import React from "react";
import { brands } from "../../static/dataPartners";
import CheckBox from "../checkBox/Checkbox";

const BrandsFilter: React.FC = () => {
  return (
    <div className="sidebarSection">
      <h3>Brands</h3>
      {brands.map((item, i) => {
        return (
          <CheckBox key={"input" + item} item={item}>
            {item}
          </CheckBox>
        );
      })}
    </div>
  );
};

export default BrandsFilter;
