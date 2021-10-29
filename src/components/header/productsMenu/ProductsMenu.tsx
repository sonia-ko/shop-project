import React from "react";
import { productCategories } from "../../../Config";
import classes from "./ProductsMenu.module.css";

const ProductsMenu: React.FC = () => {
  return (
    <div className={classes.container}>
      <nav>
        <ul className={classes.productsMenu}>
          {productCategories.map((item, i) => {
            return (
              <li className={classes.menuItem} key={item.name + i}>
                <select className={classes.selectBox}>
                  <option className={classes.selectOption}>
                    {item.name}
                    &#129171;
                  </option>
                  {item.categories.map((category, i) => {
                    return (
                      <option
                        className={classes.selectOption}
                        value={category}
                        key={category + i}
                      >
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
