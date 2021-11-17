import React from "react";
import classes from "./Search.module.css";
import searchIcon from "../../../assets/searching.png";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../../store/reducers/productsSlice";

const Search: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
    const searchedText = searchInputRef.current!.value;
    dispatch(searchProduct(searchedText));
  };

  return (
    <div className={classes.container}>
      {/* i need this container for the border-right to be displayed properly */}
      <div className={classes.selectboxContainer}>
        <select className={classes.selectBox} name="category" id="category">
          <option className={classes.option} defaultValue="All categories">
            All categories
          </option>
          <option className={classes.option} value="pizza">
            Pizza
          </option>
          <option className={classes.option} value="friuts">
            Fruits
          </option>
          <option className={classes.option} value="berries">
            Berries
          </option>
          <option className={classes.option} value="tea">
            Tea
          </option>
          <option className={classes.option} value="other">
            Other
          </option>
        </select>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          ref={searchInputRef}
          placeholder="Search Products, categories..."
          type="search"
        />
      </form>

      <img className={classes.icon} src={searchIcon} alt="Search icon" />
    </div>
  );
};

export default Search;
