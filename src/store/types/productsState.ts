import Product from "../../interfaces/product";

export interface ProductsState {
  items: Product[];
  minPrice: number;
  maxPrice: number;
  allProducts: Product[];
  visibleProducts: Product[];
  numberOfProducts: number | undefined;
  numberOfPages: number;
  productsPerPage: 5;
  lasVisibleProduct: number;
  firstVisibleProduct: number;
  currentPage: number;
  productCategories: string[];
  farms: string[];
  selectedCategory: string;
  maxRating: number;
  filters: {
    farm: string[];
    rate: number[];
    categories: string;
    price: number[];
    productType: string;
  };
}
