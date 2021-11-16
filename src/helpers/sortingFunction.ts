import Product from "../interfaces/product";
import { SortingModel } from "../interfaces/sorting";

export const compareValues = (parameters: SortingModel) => {
  return function innerSort(a: Product, b: Product) {
    const obj1 = a[parameters.key];
    const obj2 = b[parameters.key];
    let comparison = 0;
    if (obj1 > obj2) {
      comparison = 1;
    } else if (obj1 < obj2) {
      comparison = -1;
    }
    return parameters.order === "desc" ? comparison * -1 : comparison;
  };
};
