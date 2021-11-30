import classes from "./ProductOverView.module.css";
import React from "react";
import Button from "../../../../components/buttons/Button";
import heartIcon from "../../../../assets/heartIcon.gif";
import arrowRight from "../../../../assets/arrowRight.png";
import StarsRating from "../../../../components/rating/StarsRating";
import { useHistory } from "react-router";
import Product from "../../../../interfaces/product";

interface ProductOverviewProps {
  product: Product;
}
const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {
  const history = useHistory();

  const redirect = () => () => {
    history.push(`/product/${product.id}`);
  };

  const addToWishList = () => {
    history.push("/login");
  };

  return (
    <li className={classes.container}>
      <img
        className={classes.img}
        src={product.mainPicture}
        alt={product.title}
      />

      <div className={classes.descriptionContainer}>
        <div className={classes.descriptionBlockRight}>
          <h5 className={classes.title}>{product.title}</h5>
          <p className={classes.shortDescription}>
            {product.exendedDescription}
          </p>
          <StarsRating
            numberOfFilledStars={product.rate}
            numberOfStars={5}
            itemName={product.title}
            starColor="black"
          />

          <ul className={classes.list}>
            <li className={classes.listItem}>
              <span className={classes.category}>Freshness</span>
              <span className="green">{product.freshness}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Farm: </span>
              <span>{product.farm}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Delivery: </span>
              <span>{product.deliveryArea}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Stock: </span>
              <span className="green">{product.stockNumber}</span>
            </li>
          </ul>
        </div>

        <div className={classes.descriptionBlockLeft}>
          <div className={classes.pricing}>
            <span className={classes.newPrice}>{product.price} USD </span>
            <span className={classes.oldPrice}>{product.oldPrice}</span>
          </div>

          <div className={classes.shippingArea}>
            <div className="bold"> {product.shipping}</div>
            <div>Delivery in {product.deliveryTime} day</div>
          </div>
          <div className={classes.buttonsSection}>
            <Button
              btnStyle="green"
              onClick={redirect()}
              btnText="Product detail"
              btnIconAfter={arrowRight}
            />
            <Button
              btnIconBefore={heartIcon}
              btnText=" Add to wish list"
              onClick={addToWishList}
              btnStyle="gray"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductOverview;
