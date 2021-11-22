import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { fetchProducts } from "../actions/productsThunk";
import { ProductsState } from "../types/productsState";
import { SortingModel } from "../../interfaces/sorting";
import { compareValues } from "../../helpers/sortingFunction";
import { filterValues } from "../../helpers/filteringFunction";

const initialState: ProductsState = {
  items: [],
  productsFetched: false,
  allProducts: [],
  visibleProducts: [],
  numberOfProducts: 0,
  numberOfPages: 1,
  productsPerPage: 5,
  lasVisibleProduct: 5,
  firstVisibleProduct: 0,
  currentPage: 1,
  minPrice: 1,
  maxPrice: 1000,
  selectedCategory: "",
  productCategories: [],
  maxRating: 5,
  farms: [],
  filters: { farm: [], rate: [], categories: "", price: [], productType: "" },
  sorting: {
    key: "id",
    order: "desc",
  },
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
    },
    sortProducts(state, action: PayloadAction<SortingModel>) {
      state.visibleProducts = [...state.visibleProducts].sort(
        compareValues({ key: action.payload.key, order: action.payload.order })
      );
      state.sorting = action.payload;
    },
    filterProducts(
      state,
      action: PayloadAction<
        | { filter: "farm"; value: string }
        | { filter: "rate"; value: number }
        | { filter: "categories"; value: string } // Most popular, Total sale,
        | { filter: "price"; value: number[] }
        | { filter: "productType"; value: string } // like vegetable
      >
    ) {
      state.currentPage = 1;
      switch (action.payload.filter) {
        case "farm":
          const farmValue = action.payload.value;
          state.filters.farm = state.filters.farm.includes(farmValue)
            ? state.filters.farm.filter((filter) => filter !== farmValue)
            : [...state.filters.farm, farmValue];
          break;
        case "rate":
          const rateValue = action.payload.value;
          state.filters.rate = state.filters.rate.includes(rateValue)
            ? state.filters.rate.filter((filter) => filter !== rateValue)
            : [...state.filters.rate, rateValue];
          break;
        case "categories":
          state.filters.categories = action.payload.value;
          state.selectedCategory = action.payload.value;
          break;
        case "price":
          state.filters.price = action.payload.value;
          break;
        case "productType":
          state.filters.productType = action.payload.value;
          break;
      }

      const filteredByCategory = filterValues({
        products: state.allProducts,
        parameters: { type: "categories", filters: state.filters.categories },
      });

      const filteredByFarm = filterValues({
        products: filteredByCategory,
        parameters: { type: "farm", filters: state.filters.farm },
      });

      const filteredByRate = filterValues({
        products: filteredByFarm,
        parameters: { type: "rate", filters: state.filters.rate },
      });

      const filteredByProductType = filterValues({
        products: filteredByRate,
        parameters: { type: "productType", filters: state.filters.productType },
      });

      const filteredByPrice = filterValues({
        products: filteredByProductType,
        parameters: { type: "price", filters: state.filters.price },
      });

      state.visibleProducts = [...filteredByPrice].sort(
        compareValues(state.sorting)
      );

      state.numberOfProducts = state.visibleProducts.length;
      state.numberOfPages = Math.ceil(
        state.visibleProducts.length / state.productsPerPage
      );
    },

    resetFilters(state) {
      state.productsPerPage = 5;
      state.visibleProducts = state.allProducts.sort(
        compareValues(state.sorting)
      );
      state.numberOfProducts = state.allProducts.length;
      state.numberOfPages = Math.ceil(
        state.numberOfProducts / state.productsPerPage
      );
      state.filters = {
        farm: [],
        rate: [],
        categories: "",
        price: [],
        productType: "",
      };
      state.selectedCategory = "";
    },
    showMoreProductsPerPage(state) {
      state.productsPerPage = state.productsPerPage + 5;
      state.numberOfProducts = state.visibleProducts.length;
      state.numberOfPages = Math.ceil(
        state.visibleProducts.length / state.productsPerPage
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = [...action.payload];
      state.visibleProducts = state.allProducts.sort(
        compareValues(state.sorting)
      );

      const categories = new Set<string>();
      const farms = new Set<string>();
      const prices: number[] = [];

      state.visibleProducts.forEach((product) => {
        product.categories.forEach((category) => categories.add(category));
        farms.add(product.farm);
        prices.push(product.price);
      });
      state.productCategories = Array.from(categories.values());
      state.farms = Array.from(farms.values());
      state.minPrice = Math.min(...prices);
      state.maxPrice = Math.max(...prices);

      state.numberOfProducts = state.visibleProducts.length;
      state.numberOfPages = Math.ceil(
        state.numberOfProducts / state.productsPerPage
      );

      state.items = state.allProducts.slice(0, state.productsPerPage);
      state.productsFetched = true;
    });
  },
});

export const {
  setPage,
  showMoreProductsPerPage,
  resetFilters,
  sortProducts,
  filterProducts,
} = productsSlice.actions;
export const selectCount = (state: RootState) => state.products.currentPage;

export default productsSlice.reducer;
