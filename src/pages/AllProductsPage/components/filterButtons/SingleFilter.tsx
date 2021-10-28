import React from "react";
import classes from "./SingleFilter.module.css";

const SingleFilter: React.FC = () => {
  return (
    <div className={classes.filterContainer}>
      <label className={classes.filterLabel} htmlFor="sortBy">
        Sort By:
      </label>
      <select className={classes.selectBox} name="sort By" id="sortBy">
        <option value="No-filter">Select</option>
        <option value="Country">Country</option>
        <option value="Price">Price</option>
        <option value="Quality">Quality</option>
      </select>
    </div>
  );
};

export default SingleFilter;
