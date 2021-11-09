import React from "react";
import classes from "./Pagination.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const Pagination: React.FC = () => {
  const numOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );

  let pages = [];
  for (let i = 0; i < numOfPages; i++) {
    pages.push(i);
  }

  console.log(pages);

  return (
    <div>
      <span className={classes.page}> Page: </span>
      {pages.map((item) => {
        return (
          <span className={classes.pageNumber} key={"pageNumber" + item}>
            {item + 1}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
