import React from "react";
import classes from "./SortingButton.module.css";

const SortingButton: React.FC = () => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="sortBy">
        Sort By:
      </label>
      <select className={classes.selectBox} name="sort By" id="sortBy">
        <option value="No-filter">Select</option>
        <option value="Price">Price ↑</option>
        <option value="Price">Price ↓</option>
        <option value="Quality">Rate ↑</option>
        <option value="Quality">Rate ↓</option>
      </select>
    </div>
  );
};

export default SortingButton;
