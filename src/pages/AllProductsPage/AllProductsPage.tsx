import React from "react";
import CurrentLocation from "../../components/currentLocation/CurrentLocation";
import classes from "./AllProductsPage.module.css";
import SingleFilter from "./components/filterButtons/SingleFilter";
import MainBlock from "./main/MainBlock";
import Sidebar from "./sidebar/SideBar";

const AllProductsPage: React.FC = () => {
  return (
    <div className={classes.ProductsPageContainer}>
      <CurrentLocation></CurrentLocation>
      <h1>All Products</h1>
      <SingleFilter></SingleFilter>
      <div className={classes.allProductsPageBody}>
        <Sidebar></Sidebar>
        <MainBlock></MainBlock>
      </div>
    </div>
  );
};

export default AllProductsPage;
