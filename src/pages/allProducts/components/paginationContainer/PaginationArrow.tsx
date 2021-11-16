import React from "react";
import classes from "./PaginationArrow.module.css";

interface PaginationArrowProps {
  item: string;
  handleClick?: () => void;
}

const PaginationArrow: React.FC<PaginationArrowProps> = ({
  item,
  handleClick,
}) => {
  return (
    <span onClick={handleClick} className={classes.arrow}>
      {item}
    </span>
  );
};

export default PaginationArrow;
