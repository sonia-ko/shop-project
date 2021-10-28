import React from "react";
import classes from "./Search.module.css";
import searchIcon from "./searching.png";

const Search: React.FC = () => {
  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.selectboxContainer}>
        <select name="category" id="category">
          <option defaultValue="All categories">All categories&nbsp;</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Clothes">Clothes</option>
        </select>
      </div>
      <div className={classes.inputContainer}>
        <input placeholder="Search Products, categories..." type="text" />
      </div>
      <div className={classes.imgContainer}>
        <img src={searchIcon} alt="Search icon" />
      </div>
    </div>
  );
};

export default Search;
