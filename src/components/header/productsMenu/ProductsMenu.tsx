import React from "react";
import { productCategories } from "../../../Config";
import classes from "./ProductsMenu.module.css";

const ProductsMenu: React.FC = () => {
  console.log(productCategories);
  return (
    <div className={classes.productsMenuContainer}>
      <nav className={classes.productsMenu}>
        <ul>
          {productCategories.map((item, i) => {
            return (
              <li className={classes.menuItem} key={item.name + i}>
                <select>
                  <option>
                    {item.name}
                    &#129171;
                  </option>
                  {item.categories.map((category, i) => {
                    return (
                      <option value={category} key={category + i}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ProductsMenu;
