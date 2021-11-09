import React from "react";
import classes from "./ProductListSection.module.css";
import ProductOverview from "../components/productOverview/ProductOverView";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../store/store";
import { fetchProducts } from "../../../store/actions/productsThunk";

const ProductListSection: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const pageNumber = useSelector(
    (state: RootState) => state.products.currentPage
  );
  const status = useSelector(
    (state: RootState) => state.products.productsFetched
  );

  useEffect(() => {
    if (!status) {
      dispatch(fetchProducts(pageNumber));
    }
  }, [status, dispatch, pageNumber]);

  return (
    <div className={classes.mainBlock}>
      {products.map((product) => {
        return (
          <ProductOverview
            rating={product.rating}
            title={product.title}
            picture={product.mainPicture}
            key={product.id}
            price={product.price}
            farm={product.farm}
            shortOverview={product.shortDescription}
            oldPrice={product.oldPrice}
            freshness={product.freshness}
            deliveryArea={product.deliveryArea}
            stockNumber={product.stockNumber}
            specialProduct={product.specialProduct}
            deliveryTime={product.deliveryTime}
          />
        );
      })}
    </div>
  );
};

export default ProductListSection;
