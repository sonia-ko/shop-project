import React from "react";
import { brands } from "../../static/dataPartners";
import CheckBox from "../checkBox/Checkbox";
import { setFilter } from "../../store/reducers/productsSlice";
import { useDispatch } from "react-redux";

const BrandsFilter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebarSection">
      <h3>Brands</h3>
      <ul>
        {brands.map((item, i) => {
          return (
            <li key={"input" + item}>
              <CheckBox
                handleClick={() => {
                  dispatch(setFilter(["farm", item]));
                }}
                item={item}
              >
                {item}
              </CheckBox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandsFilter;
