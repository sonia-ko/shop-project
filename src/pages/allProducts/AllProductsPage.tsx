import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import classes from "./AllProductsPage.module.css";
import SortingButton from "./components/sorting/SortingButton";
import ProductListSection from "./productList/ProductListSection";
import Sidebar from "../../components/sidebar/SideBar";
import PaginationContainer from "./components/paginationBlock/PaginationContainer";
import { useState, useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // const querySnapshot = await getDocs(collection(db, "products"));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    //   // console.log(`${doc.id} => ${doc.data().title}`);
    // });

    const q = query(
      collection(db, "products"),
      where("id", "==", "VeganPizzaMargherita1")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div className={classes.container}>
      <Breadcrumbs />
      <h1>All Products</h1>
      <SortingButton />
      <div className={classes.body}>
        <Sidebar />
        <ProductListSection />
      </div>
      <PaginationContainer />
    </div>
  );
};

export default AllProductsPage;
