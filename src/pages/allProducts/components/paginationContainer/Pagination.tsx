import React from "react";
import classes from "./Pagination.module.css";

const Pagination: React.FC = () => {
  return (
    <div>
      <span className={classes.page}> Page: </span>{" "}
      <span className={classes.currentPage}> 1 </span> 2 3 4
    </div>
  );
};

export default Pagination;
