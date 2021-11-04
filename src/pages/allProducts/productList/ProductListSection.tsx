import React from "react";
import classes from "./ProductListSection.module.css";
import ProductOverview from "../components/productOverview/ProductOverView";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../store/store";
import { fetchProducts } from "../../../store/thunks/productsThunk";

const ProductListSection: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector(
    (state: RootState) => state.products.productsFetched
  );

  useEffect(() => {
    if (!status) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <div className={classes.mainBlock}>
      {products.map((product) => {
        return (
          <ProductOverview
            title={product.title}
            picture={product.mainPicture}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default ProductListSection;
