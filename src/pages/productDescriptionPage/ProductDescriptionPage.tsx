import React from "react";
import classes from "./ProductDescriptionPage.module.css";
import { useParams } from "react-router";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/actions/productsThunk";
import { setPage } from "../../store/reducers/productsSlice";
import NoProductsFound from "../../components/noProductsFound/NoProductsFound";
import ProductReviewContainer from "./ProductReviewContainer/ProductReview";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const ProductDescptionPage: React.FC = () => {
  interface ParamTypes {
    id: string;
  }
  const productsFetched = useSelector(
    (state: RootState) => state.products.productsFetched
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productsFetched) {
      dispatch(fetchProducts());
      dispatch(setPage(1));
    }
  }, [dispatch, productsFetched]);

  const { id } = useParams<ParamTypes>();
  const idTofindProduct: number = Number(id);

  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );

  const product = products.find((product) => product.id === idTofindProduct);

  const productTitle = product ? product.title : "No product found";

  return (
    <div className={classes.container}>
      <Breadcrumbs product={productTitle} />
      {product ? (
        <ProductReviewContainer product={product} />
      ) : (
        <NoProductsFound />
      )}
    </div>
  );
};

export default ProductDescptionPage;
