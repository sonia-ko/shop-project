import Product from "../../interfaces/product";

export interface ProductsState {
  items: Product[];
  allProducts: Product[];
  visibleProducts: Product[];
  productsFetched: boolean;
  currentProduct: Product | undefined;
  numberOfProducts: number | undefined;
  numberOfPages: number;
  productsPerPage: 5;
  lasVisibleProduct: number;
  firstVisibleProduct: number;
  currentPage: number;
  filters: [string, string | number][];
  farmFilters: string[];
  categoryFilters: string;
  ratingFilters: number[];
  priceFilters: number[];
  filtersEnabled: boolean;
  searchEnabled: boolean;
}
