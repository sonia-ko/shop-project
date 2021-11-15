import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import classes from "./AllProductsPage.module.css";
import SortingButton from "./components/sorting/SortingButton";
import ProductListSection from "./components/productList/ProductListSection";
import Sidebar from "../../components/sidebar/SideBar";
import PaginationContainer from "./components/paginationContainer/PaginationContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { fetchProducts } from "../../store/actions/productsThunk";
import { setPage } from "../../store/reducers/productsSlice";

const AllProductsPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setPage(1));
  }, []);

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
