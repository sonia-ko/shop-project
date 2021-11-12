import Product from "../../interfaces/product";

export interface ProductsState {
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
