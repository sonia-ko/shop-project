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

const productsRef = collection(db, "products");

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (firstVisibleProduct: number) => {
    try {
      // To get all products from DB (matbe I will need it later)
      // const querySnapshot = await getDocs(collection(db, "products"));
      // const payload: any = [];
      // querySnapshot.forEach((doc) => {
      //   payload.push(doc.data());
      // });
      // console.log(payload);
      // return payload;
      // const first = await query(
      //   collection(db, "products"),
      //   orderBy("id"),
      //   limit(5)
      // );

      // const documentSnapshots = await getDocs(first);

      const q = query(
        productsRef,
        where("id", ">", firstVisibleProduct),
        orderBy("id"),
        limit(5)
      );
      const payload: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        payload.push(doc.data());
      });

      console.log(payload);
      return payload;

      // console.log(documentSnapshots);
      // const payload: any = [];

      // documentSnapshots.forEach((doc) => {
      //   payload.push(doc.data());
      // });
      // console.log(payload);
      // return payload;
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

export const nextPage = createAsyncThunk("page/next", async (id: string) => {
  try {
    // do sth
    console.log("updated");
  } catch {
    window.alert("Failed to get product");
  }
});
