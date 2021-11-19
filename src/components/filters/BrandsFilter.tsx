import React from "react";
import { brands } from "../../static/dataPartners";
import CheckBox from "../checkBox/Checkbox";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const BrandsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const farmsList = useSelector((state: RootState) => state.products.farms);

  return (
    <div className="sidebarSection">
      <h3>Brands</h3>
      <ul>
        {farmsList.map((item) => {
          return (
            <li key={"input" + item}>
              <CheckBox
                handleClick={() => {
                  dispatch(filterProducts({ filter: "farm", value: item }));
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
