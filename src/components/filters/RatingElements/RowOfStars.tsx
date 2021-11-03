import React from "react";
import classes from "./Stars.module.css";
import starFull from "./starFull.png";
import starEmpty from "./starEmpty.png";
import checkboxClasses from "../BrandsFilter.module.css";

interface RowOfStarsProps {
  starsEmpty: Boolean[];
  itemName: string;
}
const RowOfStars: React.FC<RowOfStarsProps> = ({ starsEmpty, itemName }) => {
  return (
    <div className={checkboxClasses.checkboxOption}>
      {starsEmpty.map((item, i) => {
        return (
          <img
            className={classes.starIcon}
            src={item ? starEmpty : starFull}
            alt="star icon"
            key={itemName + i}
          />
        );
      })}
    </div>
  );
};

export default RowOfStars;
