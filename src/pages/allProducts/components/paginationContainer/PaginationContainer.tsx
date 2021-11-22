import React from "react";
import Pagination from "./Pagination";
import TotalProducts from "../../../../components/totalProducts/TotalProducts";
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
  const products = useSelector(
    (state: RootState) => state.products.visibleProducts
  );

  const allProducts = useSelector(
    (state: RootState) => state.products.allProducts
  );
  const numbOfProducts = allProducts.length;

  const sufficientProducts =
    currentPage !== numberOfPages && products.length !== 0;

  return (
    <div className={classes.container}>
      {products.length !== 0 ? (
        <Pagination />
      ) : (
        <div className={classes.text}>No pages available </div>
      )}
      {sufficientProducts ? (
        <>
          <Button
            btnText="Show more products"
            onClick={() => dispatch(showMoreProductsPerPage())}
            btnStyle="green"
            btnIconAfter={arrowDown}
          />
        </>
      ) : null}
      <TotalProducts numberOfProducts={numbOfProducts} />
    </div>
  );
};

export default PaginationContainer;
