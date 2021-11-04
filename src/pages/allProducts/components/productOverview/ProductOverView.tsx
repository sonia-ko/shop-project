import classes from "./ProductOverView.module.css";
import React from "react";
import RowOfStars from "../../../../components/ratingElements/RowOfStars";
import Button from "../../../../components/buttons/Button";

interface ProductOverviewProps {
  picture: string;
  title: string;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  picture,
  title,
}) => {
  const openProduct = () => {
    console.log("Product opened");
  };

  const addToWishList = () => {
    console.log("Product added to wishlist");
  };

  return (
    <div className={classes.container}>
      <img className={classes.productImage} src={picture} alt="Pizza" />

      <div className={classes.productDescriptionBlock}>
        <h5>{title}</h5>
        <p className={classes.productDescription}>
          Tender chicken, Caesar dressing with tasty toppings.
        </p>
        <RowOfStars
          starColor="black"
          itemName="super-pizza"
          starsEmpty={[false, false, false, false, false]}
        />
        <div className={classes.additionalInfo}>
          <ul className={classes.additionalInfoList}>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Freshness: </span>
              <span className={classes.categoryDescription}>
                New (Extra Fresh)
              </span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Farm: </span>
              <span className={classes.categoryDescription}>
                Grocery Tarn Fields
              </span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Delivery: </span>
              <span className={classes.categoryDescription}>Europe</span>
            </li>
            <li className={classes.additionalInfoListItem}>
              <span className={classes.category}>Stock: </span>
              <span className={classes.categoryDescription}>320pcs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.actionsBlock}>
        <div className={classes.newPrice}>36.99 USD </div>
        <div className={classes.oldPrice}>48.56</div>
        <div className={classes.shipping}> Free Shipping</div>
        <div className={classes.delivery}>Delivery in 1 day</div>
        <Button
          btnStyle="green"
          onClick={openProduct}
          btnText="Product detail"
        />
        <Button
          btnText="♥ Add to wish list"
          onClick={addToWishList}
          btnStyle="gray"
        />
      </div>
    </div>
  );
};

export default ProductOverview;