import React from "react";
import classes from "./SortingButton.module.css";

const SortingButton: React.FC = () => {
  return (
    <div className={classes.filterContainer}>
      <label className={classes.filterLabel} htmlFor="sortBy">
        Sort By:
      </label>
      <select className={classes.selectBox} name="sort By" id="sortBy">
        <option value="No-filter">Select</option>
        <option value="Price">Price</option>
        <option value="Quality">Rating</option>
      </select>
    </div>
  );
};

export default SortingButton;
