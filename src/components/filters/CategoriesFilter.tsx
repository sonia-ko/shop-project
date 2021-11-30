import React from "react";
import classes from "./CategoriesFilter.module.css";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { filterProducts } from "../../store/reducers/productsSlice";

const CategoriesFilter: React.FC = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const categories = useSelector(
    (state: RootState) => state.products.productCategories
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );

  const handleClick = (item: string) => {
    if (selectedCategory === item) {
      dispatch(filterProducts({ filter: "categories", value: "" }));
      return;
    }
    dispatch(filterProducts({ filter: "categories", value: item }));
  };

  return (
    <div className="sidebarSection">
      <h3>Categories</h3>
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={handleClick.bind(null, item)}
              key={item + i}
              className={
                selectedCategory === item
                  ? classNames(classes.filterEnabled, classes.listItem)
                  : classes.listItem
              }
            >
              <span>{item}</span>
              <span className={classes.quantity}>
                {products.filter((el) => el.categories.includes(item)).length}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
