import React from "react";
import CheckBox from "../checkBox/Checkbox";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const BrandsFilter: React.FC = () => {
  const dispatch = useDispatch();

  const farmsList = useSelector((state: RootState) => state.products.farms);

  const onSelect = (item: string) => {
    dispatch(filterProducts({ filter: "farm", value: item }));
  };

  return (
    <div className="sidebarSection">
      <h3>Brands</h3>
      <ul>
        {farmsList.map((item) => {
          return (
            <li key={"input" + item}>
              <CheckBox
                handleClick={onSelect.bind(null, item)}
                item={item}
                category="farm"
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
