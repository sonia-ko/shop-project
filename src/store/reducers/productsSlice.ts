import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchProducts, getProduct } from "../actions/productsThunk";
import { ProductsState } from "../types/productsState";
import Product from "../../interfaces/product";
import { SortingModel } from "../../interfaces/sorting";
import { compareValues } from "../../helpers/sortingFunction";

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
  farmFilters: [],
  categoryFilters: "",
  ratingFilters: [],
  priceFilters: [],
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
    sortProducts(state, action: PayloadAction<SortingModel>) {
      state.visibleProducts = [...state.visibleProducts].sort(
        compareValues({ key: action.payload.key, order: action.payload.order })
      );
    },
    setFilter(
      state,
      action: PayloadAction<["farm" | "category", string] | ["rate", number]>
    ) {
      state.currentPage = 1;
      state.productsFetched = false;

      if (action.payload[0] === "farm") {
        state.farmFilters.push(action.payload[1]);
      }
      if (action.payload[0] === "category") {
        state.categoryFilters = action.payload[1];
      }
      if (action.payload[0] === "rate") {
        state.ratingFilters.push(action.payload[1]);
      }

      let filteredByFarm: Product[] = [];
      if (state.farmFilters.length === 0) {
        filteredByFarm = state.allProducts;
      } else {
        state.farmFilters.forEach(
          (filter) =>
            (filteredByFarm = [
              ...filteredByFarm,
              ...state.allProducts.filter((product) => product.farm === filter),
            ])
        );
      }

      let filteredByRate: Product[] = [];

      if (state.ratingFilters.length === 0) {
        filteredByRate = filteredByFarm;
      } else {
        state.ratingFilters.forEach(
          (filter) =>
            (filteredByRate = [
              ...filteredByRate,
              ...filteredByFarm.filter((product) => product.rate === filter),
            ])
        );
      }

      let filteredByCategory: Product[] = [];

      if (!state.categoryFilters) {
        filteredByCategory = filteredByRate;
      } else {
        filteredByCategory = filteredByRate.filter((product) =>
          product.specialMarks.includes(state.categoryFilters)
        );
      }

      state.visibleProducts = filteredByCategory;
      state.numberOfProducts = state.visibleProducts.length;
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
        state.numberOfProducts = state.visibleProducts.length;
        state.numberOfPages = Math.ceil(
          state.numberOfProducts / state.productsPerPage
        );
        state.items = state.allProducts.slice(0, state.productsPerPage);
      })

      .addCase(getProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const { setPage, setFilter, resetFilters, sortProducts } =
  productsSlice.actions;
export const selectCount = (state: RootState) => state.products.currentPage;

export default productsSlice.reducer;
