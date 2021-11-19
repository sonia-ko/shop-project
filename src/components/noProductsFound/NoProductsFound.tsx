import React from "react";
import classes from "./NoProductsFound.module.css";
import noResult from "../../assets/noresult.gif";

const NoProductsFound: React.FC = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>No products found</h2>
      <img
        className={classes.image}
        src={noResult}
        alt="no result found on your query"
      />
    </div>
  );
};

export default NoProductsFound;
