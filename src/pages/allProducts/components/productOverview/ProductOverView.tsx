import classes from "./ProductOverView.module.css";
import React from "react";
import RowOfStars from "../../../../components/ratingElements/RowOfStars";
import Button from "../../../../components/buttons/Button";
import heartIcon from "./heartIcon.gif";
import classnames from "classnames";
import arrowRight from "./arrowRight.png";

// className={classnames(`${classes.thumb} ${classes.thumbZindex3}`, {
//           thumbZindex5: minVal > max - 100,
//         })}

interface ProductOverviewProps {
  picture: string;
  title: string;
  price: number;
  rating: boolean[];
  farm: string;
  shortOverview: string;
  oldPrice: number | undefined;
  freshness: string;
  deliveryArea: string;
  stockNumber: string;
  specialProduct: string;
  deliveryTime: number;
}

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
      <img className={classes.productImage} src={picture} alt="Pizza" />

      {/* Product description block */}
      <div className={classes.productDescriptionBlock}>
        <h5>{title}</h5>
        <p className={classes.shortOverview}>{shortOverview}</p>
        <RowOfStars
          starColor="black"
          itemName="super-pizza"
          starsEmpty={rating}
        />

        <div className={classes.additionalInfo}>
          <ul className={classes.additionalInfoList}>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Freshness: </span>
              <span
                className={classnames(
                  `${classes.categoryDescription} ${classes.green}`
                )}
              >
                {freshness}
              </span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Farm: </span>
              <span className={classes.categoryDescription}>{farm}</span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Delivery: </span>
              <span className={classes.categoryDescription}>
                {deliveryArea}
              </span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Stock: </span>
              <span
                className={classnames(
                  `${classes.categoryDescription} ${classes.green}`
                )}
              >
                {stockNumber}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Actions block */}
      <div className={classes.actionsBlock}>
        <div className={classes.newPrice}>{price} USD </div>
        <div className={classes.oldPrice}>{oldPrice}</div>

        <div className={classes.shippingArea}>
          <div className={classes.shipping}> {specialProduct}</div>
          <div className={classes.delivery}>Delivery in {deliveryTime} day</div>
        </div>
        <Button
          btnStyle="green"
          onClick={openProduct}
          btnText="Product detail"
          btnIconAfter={arrowRight}
        />
        <Button
          btnIcon={heartIcon}
          btnText=" Add to wish list"
          onClick={addToWishList}
          btnStyle="gray"
        />
      </div>
    </div>
  );
};

export default ProductOverview;
