import classes from "./ProductOverView.module.css";
import React from "react";
import RowOfStars from "../../../../components/filters/RatingElements/RowOfStars";
import GreenButton from "../../../../components/buttons/GreenButton";
import GrayButton from "../../../../components/buttons/GrayButton";

const ProductOverview: React.FC = () => {
  const openProduct = () => {
    console.log("Product opened");
  };

  const addToWishList = () => {
    console.log("Product added to wishlist");
  };

  return (
    <div className={classes.container}>
      <img
        className={classes.productImage}
        src="https://static.tildacdn.com/tild3364-3031-4362-b131-363939386537/noroot.png"
        alt="Pizza"
      />

      <div className={classes.productDescriptionBlock}>
        <h5>Pizza Caesare</h5>
        <p className={classes.productDescription}>
          Tender chicken, Caesar dressing with tasty toppings.
        </p>
        <RowOfStars
          itemName={"super-pizza"}
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
        <GreenButton onClick={openProduct} btnText={"Product detail"} />
        <GrayButton btnText={"♥ Add to wish list"} onClick={addToWishList} />
      </div>
    </div>
  );
};

export default ProductOverview;
