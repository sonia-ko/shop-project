import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import classes from "./AllProductsPage.module.css";
import SortingButton from "./components/sorting/SortingButton";
import ProductListSection from "./components/productList/ProductListSection";
import Sidebar from "../../components/sidebar/SideBar";
import PaginationContainer from "./components/paginationContainer/PaginationContainer";

const AllProductsPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <h1>All Products</h1>
      <SortingButton />
      <main>
        <div className={classes.body}>
          <Sidebar />
          <ProductListSection />
        </div>
        <PaginationContainer />
      </main>
    </div>
  );
};

export default AllProductsPage;
