import Product from "../interfaces/product";
import { FilteringModel } from "../interfaces/filtering";

export const filterValues = (options: FilteringModel) => {
  let filteredItems: Product[] = [];

  if (options.parameters.filters.length === 0) return options.products;

  switch (options.parameters.type) {
    case "productType":
      const filterString = options.parameters.filters.toLowerCase();
      filteredItems = options.products.filter((product) =>
        product.title.toLowerCase().includes(filterString)
      );
      break;
    case "categories":
      const filterStringCategory = options.parameters.filters;
      filteredItems = options.products.filter((product) =>
        product.categories.includes(filterStringCategory)
      );
      break;
    case "price":
      filteredItems = options.products.filter(
        (product) =>
          product.price >= options.parameters.filters[0] &&
          product.price <= options.parameters.filters[1]
      );

      break;
    default:
      options.parameters.filters.forEach(
        (filter) =>
          (filteredItems = [
            ...filteredItems,
            ...options.products.filter(
              (product) => product[options.parameters.type] === filter
            ),
          ])
      );
  }

  return filteredItems;
};
