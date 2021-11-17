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

  const onArrowClick = (direction: "next" | "back") => {
    const newPage = direction === "next" ? firstPage + 1 : firstPage - 1;
    setFirstPage(newPage);
    dispatch(setPage(newPage));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPageClick = (item: number) => {
    dispatch(setPage(item));
    switch (item) {
      case 1:
        setFirstPage(1);
        break;
      case numOfPages:
        setFirstPage(item - 2);
        break;
      default:
        setFirstPage(item - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <span className={classes.page}> Page: </span>

      {firstPage > 1 ? (
        <>
          <PaginationArrow
            key={"arrowBack" + (firstPage - 1)}
            handleClick={onArrowClick.bind(null, "back")}
            item={"←"}
          />
          <PageNumber
            currentPage={currentPage}
            item={1}
            handleClick={onPageClick.bind(null, 1)}
            key={"pageNumber" + 1}
          />
          <span>...</span>
        </>
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
        <>
          <span>...</span>
          <PageNumber
            currentPage={currentPage}
            item={numOfPages}
            handleClick={onPageClick.bind(null, numOfPages)}
            key={"pageNumber" + numOfPages}
          />
          <PaginationArrow
            key={"arrowNext" + (lastVisiblePage + 1)}
            handleClick={onArrowClick.bind(null, "next")}
            item={"→"}
          />
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
