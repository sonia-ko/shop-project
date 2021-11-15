import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchProducts, getProduct } from "../actions/productsThunk";
import { ProductsState } from "../types/productsState";
import Product from "../../interfaces/product";
import RatingFilter from "../../components/filters/RatingFilter";

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
    // setFilter(state, action: PayloadAction<[string, string | number]>) {
    //   state.currentPage = 1;
    //   state.productsFetched = false;
    //   state.filters = [...state.filters, action.payload];
    //   const tempProducts: Product[] = [];
    //   state.filters.forEach((filter) => {
    //     if (filter[0] === "farm") {
    //       const products = state.allProducts.filter(
    //         (el) => el.farm === filter[1]
    //       );
    //       tempProducts.push(...products);
    //       // state.visibleProducts = state.allProducts.filter(
    //       //   (el) => el.farm === filter[1]
    //       // );
    //     }
    //     if (filter[0] === "category") {
    //       const products = state.allProducts.filter(
    //         (el) =>
    //           typeof filter[1] === "string" &&
    //           el.specialMarks.includes(filter[1])
    //       );
    //       tempProducts.push(...products);

    //       // state.visibleProducts = state.allProducts.filter(
    //       //   (el) =>
    //       //     typeof filter[1] === "string" &&
    //       //     el.specialMarks.includes(filter[1])
    //       // );
    //     }
    //     if (filter[0] === "rate") {
    //       const products = state.allProducts.filter(
    //         (el) => typeof filter[1] === "number" && el.rate === filter[1]
    //       );
    //       tempProducts.push(...products);
    //       // state.visibleProducts = state.allProducts.filter(
    //       //   (el) => typeof filter[1] === "number" && el.rate === filter[1]
    //       // );
    //     }
    //   });
    //   const set = new Set(tempProducts);
    //   state.visibleProducts = Array.from(set);

    //   console.log(state.visibleProducts);
    //   state.numberOfPages = Math.ceil(
    //     state.visibleProducts.length / state.productsPerPage
    //   );
    // },
    // Mehod 2
    // setFilter(state, action: PayloadAction<[string, string | number]>) {
    //   state.currentPage = 1;
    //   state.productsFetched = false;
    //   state.filters = [...state.filters, action.payload];

    //   state.filters.forEach((filter) => {
    //     if (filter[0] === "farm") {
    //       state.visibleProducts = state.allProducts.filter(
    //         (el) => el.farm === filter[1]
    //       );
    //     }
    //     if (filter[0] === "category") {
    //       state.visibleProducts = state.allProducts.filter(
    //         (el) =>
    //           typeof filter[1] === "string" &&
    //           el.specialMarks.includes(filter[1])
    //       );
    //     }
    //     if (filter[0] === "rate") {
    //       state.visibleProducts = state.allProducts.filter(
    //         (el) => typeof filter[1] === "number" && el.rate === filter[1]
    //       );
    //     }
    //   });

    //   console.log(state.visibleProducts);
    //   state.numberOfPages = Math.ceil(
    //     state.visibleProducts.length / state.productsPerPage
    //   );
    // },
    // Method 3
    // setFilter(state, action: PayloadAction<[string, string | number]>) {
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

      // let filteredByCategory: Product[] = [];

      // if (!state.categoryFilters) {
      //   filteredByCategory;
      // }

      state.visibleProducts = filteredByRate;

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
