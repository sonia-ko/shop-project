import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Product from "../../models/product";
import {
  fetchProducts,
  getProduct,
  getProductsNumber,
} from "../actions/productsThunk";

// Define a type for the slice state
interface ProductsState {
  items: Product[];
  productsFetched: boolean;
  currentProduct: any;
  numberOfProducts: number | undefined;
  numberOfPages: number;
  productsPerPage: 5;
  lasVisibleProduct: number;
  firstVisibleProduct: number;
  currentPage: number;
}

// Define the initial state using that type
const initialState = {
  items: [],
  productsFetched: false,
  currentProduct: undefined,
  numberOfProducts: 0,
  numberOfPages: 4,
  productsPerPage: 5,
  lasVisibleProduct: 5,
  firstVisibleProduct: 0,
  currentPage: 1,
} as ProductsState;

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      console.log("function called");

      state.currentPage = action.payload;
      state.lasVisibleProduct = state.currentPage * state.productsPerPage;
      state.firstVisibleProduct =
        state.lasVisibleProduct - state.productsPerPage;
      state.productsFetched = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsFetched = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productsFetched = true;
        state.items = [...action.payload];
      })
      .addCase(getProductsNumber.fulfilled, (state, action) => {
        state.numberOfProducts = action.payload;
        state.numberOfPages = state.numberOfProducts
          ? Math.ceil(state.numberOfProducts / state.productsPerPage)
          : 1;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

// export const { updatePage } = productsSlice.actions;
export const { setPage } = productsSlice.actions;
export const selectCount = (state: RootState) => state.products.currentPage;

export default productsSlice.reducer;
