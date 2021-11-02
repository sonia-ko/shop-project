import React from "react";
import classes from "./Stars.module.css";
import starFull from "./starFull.png";
import starEmpty from "./starEmpty.png";
import checkboxClasses from "../BrandsFilter.module.css";
import { isTemplateExpression } from "typescript";

const RowOfStars: React.FC<{
  starsEmpty: Boolean[];
  itemName: string;
}> = (props) => {
  return (
    <div className={checkboxClasses.checkboxOption}>
      {props.starsEmpty.map((item, i) => {
        return (
          <img
            className={classes.starIcon}
            src={item ? starEmpty : starFull}
            alt="star icon"
            key={props.itemName + i}
          />
        );
      })}
    </div>
  );
};

export default RowOfStars;
