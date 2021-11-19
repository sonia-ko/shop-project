import React from "react";
import classes from "./Search.module.css";
import searchIcon from "../../../assets/searching.png";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../store/reducers/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Search: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useSelector(
    (state: RootState) => state.products.productCategories
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );

  const dispatch = useDispatch();

  const onChangeInputHandler = () => {
    const searchedText = searchInputRef.current!.value;
    dispatch(filterProducts({ filter: "productType", value: searchedText }));
  };

  const onChangeOptionHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      filterProducts({ filter: "categories", value: event.target.value })
    );
  };

  return (
    <div className={classes.container}>
      {/* i need this container for the border-right to be displayed properly */}
      <div className={classes.selectboxContainer}>
        <select
          value={selectedCategory}
          onChange={onChangeOptionHandler}
          className={classes.selectBox}
          name="category"
          id="category"
        >
          <option className={classes.option} value="">
            All categories
          </option>

          {categories.map((item) => {
            return (
              <option
                key={"selectOptionCategory" + item}
                className={classes.option}
                value={item}
                // selected={selectedCategory === item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>

      <input
        onChange={onChangeInputHandler}
        className={classes.input}
        ref={searchInputRef}
        placeholder="Search Products, categories..."
        type="search"
      />

      <img className={classes.icon} src={searchIcon} alt="Search icon" />
    </div>
  );
};

export default Search;
