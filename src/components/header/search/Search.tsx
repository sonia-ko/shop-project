import React from "react";
import classes from "./Search.module.css";
import searchIcon from "../../../assets/searching.png";

const Search: React.FC = () => {
  return (
    <div className={classes.container}>
      {/* i need this container for the border-right to be displayed properly */}
      <div className={classes.selectboxContainer}>
        <select className={classes.selectBox} name="category" id="category">
          <option className={classes.option} defaultValue="All categories">
            All categories
          </option>
          <option className={classes.option} value="Electronics">
            Electronics
          </option>
          <option className={classes.option} value="Food">
            Food
          </option>
          <option className={classes.option} value="Clothes">
            Clothes
          </option>
        </select>
      </div>
      <input
        className={classes.input}
        placeholder="Search Products, categories..."
        type="text"
      />
      <img className={classes.icon} src={searchIcon} alt="Search icon" />
    </div>
  );
};

export default Search;
