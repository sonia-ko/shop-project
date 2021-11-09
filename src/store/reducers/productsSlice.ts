import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Product from "../../models/product";
import { fetchProducts, getProduct, nextPage } from "../actions/productsThunk";

// Define a type for the slice state
interface ProductsState {
  items: Product[];
  productsFetched: boolean;
  currentProduct: any;
  numberOfProducts: number;
  numberOfPages: number;
  productsPerPage: 5;
  firstVisibleProduct: number;
  currentPage: number;
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
  productsFetched: false,
  currentProduct: undefined,
  numberOfProducts: 19,
  numberOfPages: 5,
  productsPerPage: 5,
  firstVisibleProduct: 1,
  currentPage: 1,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // updatePage(state: RootState, action: PayloadAction<number>) {
    //   state.currentPage = action.payload;
    // },
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
      .addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      })
      .addCase(nextPage.fulfilled, (state, action) => {
        // state.items = [...action.payload];
        state.currentPage = state.currentPage++;
        state.firstVisibleProduct = state.firstVisibleProduct - 1;
        state.productsFetched = false;
      });
  },
});

// export const { updatePage } = productsSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products.items;

export default productsSlice.reducer;
