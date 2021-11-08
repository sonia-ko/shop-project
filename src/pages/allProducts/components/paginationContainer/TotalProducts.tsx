import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import classes from "./TotalProducts.module.css";

const TotalProducts: React.FC = () => {
  const numberOfProducts = useSelector(
    (state: RootState) => state.products.numberOfProducts
  );

  let pages = [];
  for (let i = 0; i < numberOfProducts; i++) {
    pages.push(i);
  }

  console.log(pages);

  return (
    <div>
      <span className={classes.quantity}>{numberOfProducts}</span>
      <span className={classes.products}>Products</span>
    </div>
  );
};

export default TotalProducts;
