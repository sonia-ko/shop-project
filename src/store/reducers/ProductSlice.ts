import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Product from "../../models/product";

// Define a type for the slice state
interface ProductsState {
  items: Product[];
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.items;

export default productsSlice.reducer;
