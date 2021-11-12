import React from "react";
import classes from "./ProductListSection.module.css";
import ProductOverview from "../productOverview/ProductOverView";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../../store/store";
import { fetchProducts } from "../../../../store/actions/productsThunk";

const ProductListSection: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  const firstVisibleProduct = useSelector(
    (state: RootState) => state.products.firstVisibleProduct
  );

  const status = useSelector(
    (state: RootState) => state.products.productsFetched
  );

  useEffect(() => {
    if (!status) {
      dispatch(fetchProducts(firstVisibleProduct));
    }
  }, [status, dispatch, firstVisibleProduct]);

  return (
    <ul className={classes.container}>
      {products.map((product) => {
        return (
          <ProductOverview key={product.id + "product"} product={product} />
        );
      })}
    </ul>
  );
};

export default ProductListSection;
