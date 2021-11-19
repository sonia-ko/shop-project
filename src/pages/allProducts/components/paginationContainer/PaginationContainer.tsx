import React from "react";
import Pagination from "./Pagination";
import TotalProducts from "./TotalProducts";
import classes from "./PaginationContainer.module.css";
import Button from "../../../../components/buttons/Button";
import arrowDown from "../../../../assets/arrowDown.png";
import { useDispatch } from "react-redux";
import { showMoreProductsPerPage } from "../../../../store/reducers/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const PaginationContainer: React.FC = () => {
  const dispatch = useDispatch();

  const numberOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );
  const currentPage = useSelector(
    (state: RootState) => state.products.currentPage
  );

  const buttonAvailable = currentPage !== numberOfPages;

  return (
    <div className={classes.container}>
      <Pagination />
      {buttonAvailable ? (
        <Button
          btnText="Show more products"
          onClick={() => dispatch(showMoreProductsPerPage())}
          btnStyle="green"
          btnIconAfter={arrowDown}
        />
      ) : null}
      <TotalProducts />
    </div>
  );
};

export default PaginationContainer;
