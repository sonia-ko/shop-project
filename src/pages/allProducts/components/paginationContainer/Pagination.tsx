import React from "react";
import classes from "./Pagination.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { setPage } from "../../../../store/reducers/productsSlice";
import { useDispatch } from "react-redux";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const numOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );

  const currentPage = useSelector(
    (state: RootState) => state.products.currentPage
  );

  let pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  return (
    <div className={classes.container}>
      <span className={classes.page}> Page: </span>
      {pages.map((item) => {
        return (
          <span
            onClick={() => {
              dispatch(setPage(item));
              window.scrollTo(0, 0);
            }}
            className={
              currentPage === item ? classes.currentPage : classes.pageNumber
            }
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
