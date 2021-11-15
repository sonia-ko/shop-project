import React from "react";
import { secondaryCategories } from "../../static/dataWebsite";
import classes from "./CategoriesFilter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../store/reducers/productsSlice";
import { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CategoriesFilter: React.FC = () => {
  const dispatch = useDispatch();
  const [filterEnabled, setFilterEnabled] = useState("");
  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );

  return (
    <div className="sidebarSection">
      <h3>Categories</h3>
      <ul>
        {secondaryCategories.map((item, i) => {
          return (
            <li
              onClick={() => {
                dispatch(setFilter(["category", item]));
                setFilterEnabled(item);
              }}
              key={item + i}
              className={
                filterEnabled === item
                  ? classNames(classes.filterEnabled, classes.listItem)
                  : classes.listItem
              }
            >
              <span>{item}</span>
              <span className={classes.quantity}>
                {products.filter((el) => el.specialMarks.includes(item)).length}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
