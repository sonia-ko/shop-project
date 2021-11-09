import React from "react";
import classes from "./Pagination.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useAppDispatch } from "../../../../hooks/Hooks";
// import { updatePage } from "../../../../store/reducers/productsSlice";

const Pagination: React.FC = () => {
  // const dispatch = useAppDispatch();

  const numOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );

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
            // onClick={dispatch(updatePage(item))}
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
