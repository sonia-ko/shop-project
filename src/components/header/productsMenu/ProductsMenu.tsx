import React from "react";
import { productCategories } from "../../../static/WebsiteData";
import classes from "./ProductsMenu.module.css";

const ProductsMenu: React.FC = () => {
  return (
    <div className={classes.container}>
      <ul className={classes.productsMenu}>
        {productCategories.map((item, i) => {
          return (
            <li className={classes.menuItem} key={item.name + i}>
              <select className={classes.selectBox}>
                <option>{item.name}</option>
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
    </div>
  );
};

export default ProductsMenu;
