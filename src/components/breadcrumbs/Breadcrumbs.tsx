import React from "react";
import classes from "./Breadcrumbs.module.css";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  product?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ product }) => {
  return (
    <div className={classes.breadcrumbs}>
      <Link className={classes.oldLocation} to="/products">
        Homepage
      </Link>
      /
      <Link className={classes.currentLocation} to="/products">
        All Products
      </Link>
      {product ? <div> / {product} </div> : null}
    </div>
  );
};

export default Breadcrumbs;
