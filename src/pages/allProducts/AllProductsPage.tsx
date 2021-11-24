import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import classes from "./AllProductsPage.module.css";
import SortingButton from "./components/sorting/SortingButton";
import ProductListSection from "./components/productList/ProductListSection";
import Sidebar from "../../components/sidebar/SideBar";
import PaginationContainer from "./components/paginationContainer/PaginationContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MobileSidebar from "../../components/mobileSidebar/MobileSidebar";
import { fetchProducts } from "../../store/actions/productsThunk";
import { setPage } from "../../store/reducers/productsSlice";
import TotalProducts from "../../components/totalProducts/TotalProducts";

const AllProductsPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(setPage(1));
  }, [dispatch]);

  const numbOfProducts = useSelector(
    (state: RootState) => state.products.numberOfProducts
  );

  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <div className={classes.header}>
        <h1>All Products</h1>
        <TotalProducts numberOfProducts={numbOfProducts} />
      </div>
      <div className={classes.buttonsContainer}>
        <MobileSidebar />
        <SortingButton />
      </div>

      <main>
        <div className={classes.body}>
          <Sidebar />

          <ProductListSection />
        </div>
      </main>
      <PaginationContainer />
    </div>
  );
};

export default AllProductsPage;
