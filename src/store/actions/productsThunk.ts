import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  startAfter,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

// const productsRef = collection(db, "products");

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (lasVisibleProduct: number) => {
    try {
      const q = query(
        collection(db, "products"),
        orderBy("id"),
        startAfter(lasVisibleProduct),
        limit(5)
      );
      const payload: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        payload.push(doc.data());
      });

      return payload;
    } catch {
      window.alert("Failed to fetch products");
    }
  }
);

export const getProduct = createAsyncThunk(
  "products/get",
  async (id: string) => {
    try {
      const q = query(collection(db, "products"), where("id", "==", id));
      const querySnapshot = await getDocs(q);
      let payload: any;
      await querySnapshot.forEach((doc) => {
        payload = doc.data();
      });
      return payload;
    } catch {
      window.alert("Failed to get product");
    }
  }
);

export const getProductsNumber = createAsyncThunk(
  "productsnumber/get",
  async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      return querySnapshot.size;
    } catch {
      window.alert("Failed to get the number of products");
    }
  }
);
