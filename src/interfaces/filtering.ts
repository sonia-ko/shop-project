import Product from "./product";

export interface FilteringModel {
  products: Product[];
  parameters:
    | { type: "farm"; filters: string[] }
    | { type: "rate"; filters: number[] }
    | { type: "productType"; filters: string }
    | { type: "price"; filters: number[] }
    | { type: "categories"; filters: string };
}
