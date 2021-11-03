import React from "react";
import classes from "./ProductListSection.module.css";
import ProductOverview from "../components/productOverview/ProductOverView";

const ProductListSection: React.FC = () => {
  return (
    <div className={classes.mainBlock}>
      <ProductOverview />
      <ProductOverview />
      <ProductOverview />
      <ProductOverview />
      <ProductOverview />
      <ProductOverview />
    </div>
  );
};

export default ProductListSection;
