import React from "react";
import { secondaryCategories } from "../../static/dataWebsite";
import classes from "./CategoriesFilter.module.css";

const CategoriesFilter: React.FC = () => {
  return (
    <div className="sidebarSection">
      <h3>Categories</h3>
      <ul>
        {secondaryCategories.map((item, i) => {
          return (
            <li key={item + i} className={classes.listItem}>
              <span>{item}</span>
              <span className={classes.quantity}>{i}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesFilter;
