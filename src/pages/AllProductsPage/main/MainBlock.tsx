import React from "react";
import classes from "./MainBlock.module.css";
import ProductOverview from "../components/productOverview/ProductOverView";

const MainBlock: React.FC = () => {
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

export default MainBlock;
