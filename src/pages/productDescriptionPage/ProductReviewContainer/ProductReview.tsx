import React from "react";
import Product from "../../../interfaces/product";
import ImagesGallery from "../../../components/imagesGallery/ImagesGallery";
import classes from "./ProductReviewContainer.module.css";

interface ProductReviewContainerProps {
  product: Product;
}

const ProductReviewContainer: React.FC<ProductReviewContainerProps> = ({
  product,
}) => {
  return (
    <div className={classes.container}>
      <ImagesGallery images={product.pictures} />
      <div>
        <h2> {product.title}</h2>
        hjhhhhjhj
      </div>
    </div>
  );
};

export default ProductReviewContainer;
