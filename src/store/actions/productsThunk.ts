import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const payload: any = [];
    querySnapshot.forEach((doc) => {
      payload.push(doc.data());
    });
    console.log(payload);
    return payload;
  } catch {
    window.alert("Failed to fetch products");
  }
});

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
