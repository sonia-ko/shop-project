import React from "react";
import classes from "./ProductListSection.module.css";
import ProductOverview from "../productOverview/ProductOverView";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../../store/store";
import { setPage } from "../../../../store/reducers/productsSlice";
import NoProductsFound from "../../../../components/noProductsFound/NoProductsFound";

const ProductListSection: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const visibleProducts = useSelector(
    (state: RootState) => state.products.visibleProducts
  );

  useEffect(() => {
    dispatch(setPage(1));
  }, [visibleProducts, dispatch]);

  return (
    <ul className={classes.container}>
      {visibleProducts.length !== 0 ? (
        products.map((product) => (
          <ProductOverview
            key={product.id + product.title + "product"}
            product={product}
          />
        ))
      ) : (
        <NoProductsFound />
      )}
    </ul>
  );
};

export default ProductListSection;
