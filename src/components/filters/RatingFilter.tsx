import React from "react";
import {
  fiveStars,
  fourStars,
  threeStars,
  twoStars,
  oneStar,
} from "../../Config";
import classes from "./RatingFilter.module.css";

const RatingFilter: React.FC = () => {
  return (
    <>
      <h3>Rating</h3>

      <div className={classes.stars}>{threeStars}</div>
    </>
  );
};

export default RatingFilter;
