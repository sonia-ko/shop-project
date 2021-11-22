import React from "react";
import classes from "./TotalProducts.module.css";

interface TotalProductsProps {
  numberOfProducts: number;
}
const TotalProducts: React.FC<TotalProductsProps> = ({ numberOfProducts }) => {
  return (
    <div className={classes.container}>
      <span className={classes.quantity}>{numberOfProducts}</span>
      <span className={classes.products}>Products</span>
    </div>
  );
};

export default TotalProducts;
