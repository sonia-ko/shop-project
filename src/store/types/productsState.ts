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
  currentPage: number | undefined;
  filters: [string, string | number][];
}
