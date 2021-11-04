import React from "react";
import { secondaryCategories } from "../../static/WebsiteData";
import classes from "./CategoriesFilter.module.css";

const CategoriesFilter: React.FC = () => {
  return (
    <>
      <h3>Categories</h3>
      <ul className={classes.container}>
        {secondaryCategories.map((item, i) => {
          return (
            <li key={item + i} className={classes.listItem}>
              <span className={classes.item}>{item}</span>
              <span className={classes.quantity}>{i}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesFilter;
