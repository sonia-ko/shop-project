import React from "react";
import Pagination from "./Pagination";
import TotalProducts from "./TotalProducts";
import classes from "./PaginationContainer.module.css";
import Button from "../../../../components/buttons/Button";
import arrowDown from "../../../../assets/arrowDown.png";

const PaginationContainer: React.FC = () => {
  const showMoreProducts = () => {
    console.log("More products shown");
  };

  return (
    <div className={classes.container}>
      <Pagination />
      <Button
        btnText="Show more products"
        onClick={showMoreProducts}
        btnStyle="green"
        btnIconAfter={arrowDown}
      />
      <TotalProducts />
    </div>
  );
};

export default PaginationContainer;
