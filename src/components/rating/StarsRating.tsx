import React from "react";
import classes from "./Stars.module.css";
import goldenStar from "../../assets/goldStarIcon.png";
import blackStar from "../../assets/blackStarIcon.png";
import starEmpty from "../../assets/starEmpty.png";

interface StarsRatingProps {
  numberOfFilledStars: number;
  itemName: string;
  starColor: "golden" | "black";
  numberOfStars: number;
}
const StarsRating: React.FC<StarsRatingProps> = ({
  numberOfFilledStars,
  itemName,
  starColor,
  numberOfStars,
}) => {
  const starFilled = starColor === "golden" ? goldenStar : blackStar;
  let stars = Array.from(
    { length: numberOfStars },
    (_, i) => i < numberOfFilledStars
  );

  return (
    <div className={classes.starsContainer}>
      {stars.map((item, i) => {
        return (
          <img
            className={classes.starIcon}
            src={item ? starFilled : starEmpty}
            alt="star icon"
            key={itemName + i}
          />
        );
      })}
    </div>
  );
};

export default StarsRating;
