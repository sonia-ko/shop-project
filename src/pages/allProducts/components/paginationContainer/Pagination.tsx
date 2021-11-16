import React from "react";
import classes from "./Pagination.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { setPage } from "../../../../store/reducers/productsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PaginationArrow from "./PaginationArrow";
import PageNumber from "./PageNumber";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const [firstPage, setFirstPage] = useState(1);

  const numOfPages = useSelector(
    (state: RootState) => state.products.numberOfPages
  );
  const currentPage = useSelector(
    (state: RootState) => state.products.currentPage
  );

  let pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  let lastVisiblePage = firstPage + 2;

  const visiblePages = pages.slice(firstPage - 1, lastVisiblePage);
  console.log(visiblePages);

  const onArrowBackClick = () => {
    setFirstPage(firstPage - 1);
    dispatch(setPage(currentPage - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onArrowNextClick = () => {
    setFirstPage(firstPage + 1);
    dispatch(setPage(currentPage + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPageClick = (item: number) => {
    dispatch(setPage(item));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <span className={classes.page}> Page: </span>

      {firstPage > 1 ? (
        <PaginationArrow
          key={"arrowBack" + (firstPage - 1)}
          handleClick={onArrowBackClick}
          item={"←"}
        />
      ) : null}

      {visiblePages.map((item) => {
        return (
          <PageNumber
            currentPage={currentPage}
            item={item}
            handleClick={onPageClick.bind(null, item)}
            key={"pageNumber" + item}
          />
        );
      })}

      {lastVisiblePage < numOfPages ? (
        <PaginationArrow
          key={"arrowNext" + (lastVisiblePage + 1)}
          handleClick={onArrowNextClick}
          item={"→"}
        />
      ) : null}
    </div>
  );
};

export default Pagination;
