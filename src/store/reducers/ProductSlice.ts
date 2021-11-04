import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Product from "../../models/product";
import { fetchProducts, getProduct } from "../thunks/productsThunk";

// Define a type for the slice state
interface ProductsState {
  items: Product[];
  productsFetched: boolean;
  currentProduct: any;
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
  productsFetched: false,
  currentProduct: undefined,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsFetched = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsFetched = true;
        state.items = [...action.payload];
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.items;

export default productsSlice.reducer;
