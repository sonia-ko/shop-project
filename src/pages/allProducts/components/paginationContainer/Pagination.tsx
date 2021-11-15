import React from "react";
import classes from "./Pagination.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { setPage } from "../../../../store/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProductsNumber } from "../../../../store/actions/productsThunk";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const numOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );

  useEffect(() => {
    setPage(1);
  });

  let pages = [];
  for (let i = 0; i < numOfPages; i++) {
    pages.push(i + 1);
  }

  return (
    <div>
      <span className={classes.page}> Page: </span>
      {pages.map((item) => {
        return (
          <span
            onClick={(e: React.MouseEvent<Element, MouseEvent>): void => {
              dispatch(setPage(item));
            }}
            className={classes.pageNumber}
            key={"pageNumber" + item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
