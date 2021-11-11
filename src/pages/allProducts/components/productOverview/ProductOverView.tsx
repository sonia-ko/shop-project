import classes from "./ProductOverView.module.css";
import React from "react";
import RowOfStars from "../../../../components/rating/RowOfStars";
import Button from "../../../../components/buttons/Button";
import heartIcon from "../../../../assets/heartIcon.gif";
// import classnames from "classnames";
import { ProductOverviewProps } from "../../../../models/productsOverview";
import arrowRight from "../../../../assets/arrowRight.png";

const ProductOverview: React.FC<ProductOverviewProps> = ({
  picture,
  title,
  rating,
  farm,
  price,
  shortOverview,
  oldPrice,
  freshness,
  deliveryArea,
  stockNumber,
  specialProduct,
  deliveryTime,
}) => {
  const openProduct = () => {
    console.log("Product opened");
  };

  const addToWishList = () => {
    console.log("Product added to wishlist");
  };

  return (
    // Container for the whole block
    <div className={classes.container}>
      {/* Photo of the product */}
      <img className={classes.img} src={picture} alt={title} />
      {/* Product description block */}
      <div className={classes.descriptionContainer}>
        {/* Block - right */}
        <div className={classes.descriptionBlockRight}>
          <h5>{title}</h5>
          <p>{shortOverview}</p>
          <RowOfStars
            starColor="black"
            itemName="super-pizza"
            starsEmpty={rating}
          />

          <ul className={classes.list}>
            <li className={classes.listItem}>
              <span className={classes.category}>Freshness: </span>
              <span className="green">{freshness}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Farm: </span>
              <span>{farm}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Delivery: </span>
              <span>{deliveryArea}</span>
            </li>
            <li className={classes.listItem}>
              <span className={classes.category}>Stock: </span>
              <span className="green">{stockNumber}</span>
            </li>
          </ul>
        </div>

        {/* Block - left */}
        <div className={classes.descriptionBlockLeft}>
          <div className={classes.newPrice}>{price} USD </div>
          <div className={classes.oldPrice}>{oldPrice}</div>

          <div className={classes.shippingArea}>
            <div className="bold"> {specialProduct}</div>
            <div>Delivery in {deliveryTime} day</div>
          </div>
          <Button
            btnStyle="green"
            onClick={openProduct}
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
  );
};

export default ProductOverview;
