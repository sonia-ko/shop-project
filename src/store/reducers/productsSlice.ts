import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchProducts, getProduct } from "../actions/productsThunk";
import { ProductsState } from "../types/productsState";

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
  allProducts: [],
  visibleProducts: [],
  productsFetched: false,
  currentProduct: undefined,
  numberOfProducts: 0,
  numberOfPages: 4,
  productsPerPage: 5,
  lasVisibleProduct: 5,
  firstVisibleProduct: 0,
  currentPage: 1,
  filters: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      state.lasVisibleProduct = state.currentPage * state.productsPerPage;
      state.firstVisibleProduct =
        state.lasVisibleProduct - state.productsPerPage;
      state.items = state.visibleProducts.slice(
        state.firstVisibleProduct,
        state.lasVisibleProduct
      );
      state.productsFetched = true;
    },
    setFilter(state, action: PayloadAction<[string, string | number]>) {
      state.currentPage = 1;
      state.productsFetched = false;
      state.filters = [...state.filters, action.payload];
      state.filters.forEach((filter) => {
        if (filter[0] === "farm") {
          state.visibleProducts = state.visibleProducts.filter(
            (el) => el.farm === filter[1]
          );
        }
        if (filter[0] === "category") {
          state.visibleProducts = state.visibleProducts.filter(
            (el) =>
              typeof filter[1] === "string" &&
              el.specialMarks.includes(filter[1])
          );
        }
        // if (filter[0] === "rating") {
        //   state.visibleProducts = state.visibleProducts.filter(
        //     (el) =>
        //       typeof filter[1] === "boolean" &&
        //       el.rating.includes(filter[1])
        //   );
        // }
      });
      console.log(state.visibleProducts);
      state.numberOfPages = Math.ceil(
        state.visibleProducts.length / state.productsPerPage
      );
    },

    resetFilters(state) {
      state.visibleProducts = state.allProducts;
      state.numberOfProducts = state.allProducts.length;
      state.numberOfPages = Math.ceil(
        state.numberOfProducts / state.productsPerPage
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.productsFetched = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.allProducts = [...action.payload];
        state.visibleProducts = state.allProducts;
        state.numberOfProducts = state.allProducts.length;
        state.numberOfPages = Math.ceil(
          state.numberOfProducts / state.productsPerPage
        );
        state.items = state.allProducts.slice(0, state.productsPerPage);
      })
      // .addCase(getProductsNumber.fulfilled, (state, action) => {
      //   state.numberOfProducts = action.payload;
      //   state.numberOfPages = state.numberOfProducts
      //     ? Math.ceil(state.numberOfProducts / state.productsPerPage)
      //     : 1;
      // })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const { setPage, setFilter, resetFilters } = productsSlice.actions;
export const selectCount = (state: RootState) => state.products.currentPage;

export default productsSlice.reducer;
