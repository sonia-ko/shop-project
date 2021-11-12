import React from "react";
import { brands } from "../../static/dataPartners";
import CheckBox from "../checkBox/Checkbox";

const BrandsFilter: React.FC = () => {
  return (
    <div className="sidebarSection">
      <h3>Brands</h3>
      <ul>
        {brands.map((item, i) => {
          return (
            <li key={"input" + item}>
              <CheckBox item={item}>{item}</CheckBox>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandsFilter;
