import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import classes from "./AllProductsPage.module.css";
import SingleFilter from "./components/filterButtons/SingleFilter";
import MainBlock from "./main/MainBlock";
import Sidebar from "../../components/sidebar/SideBar";

const AllProductsPage: React.FC = () => {
  return (
    <div className={classes.ProductsPageContainer}>
      <Breadcrumbs />
      <h1>All Products</h1>
      <SingleFilter />
      <div className={classes.allProductsPageBody}>
        <Sidebar />
        <MainBlock />
      </div>
    </div>
  );
};

export default AllProductsPage;
