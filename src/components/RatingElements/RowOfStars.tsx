import React from "react";
import classes from "./Stars.module.css";
import goldenStar from "./goldStarIcon.png";
import blackStar from "./blackStarIcon.png";
import starEmpty from "./starEmpty.png";

interface RowOfStarsProps {
  starsEmpty: Boolean[];
  itemName: string;
  starColor: "golden" | "black";
}
const RowOfStars: React.FC<RowOfStarsProps> = ({
  starsEmpty,
  itemName,
  starColor,
}) => {
  const starFilled = starColor === "golden" ? goldenStar : blackStar;
  return (
    <div className={classes.starsContainer}>
      {starsEmpty.map((item, i) => {
        return (
          <img
            className={classes.starIcon}
            src={item ? starEmpty : starFilled}
            alt="star icon"
            key={itemName + i}
          />
        );
      })}
    </div>
  );
};

export default RowOfStars;
