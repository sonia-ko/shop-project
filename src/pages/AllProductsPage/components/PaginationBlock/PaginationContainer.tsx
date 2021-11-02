import React from "react";
import GreenButton from "../../../../components/buttons/GreenButton";
import Pagination from "./Pagination";
import TotalProducts from "./TotalProducts";
import classes from "./PaginationContainer.module.css";

const PaginationContainer: React.FC = () => {
  const showMoreProducts = () => {
    console.log("More products shown");
  };

  return (
    <div className={classes.container}>
      <Pagination />
      <GreenButton btnText={"Show more products"} onClick={showMoreProducts} />
      <TotalProducts />
    </div>
  );
};

export default PaginationContainer;
