import React from "react";
import classes from "./Breadcrumbs.module.css";
import { Link } from "react-router-dom";

const CurrentLocation: React.FC = () => {
  return (
    <div className={classes.breadcrumbs}>
      <Link className={classes.oldLocation} to="/products">
        Homepage
      </Link>{" "}
      /
      <Link className={classes.currentLocation} to="/products">
        All Products
      </Link>
    </div>
  );
};

export default CurrentLocation;
