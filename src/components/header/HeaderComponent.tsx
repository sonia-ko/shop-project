import React from "react";
import MainMenu from "./mainMenu/MainMenu";
import Contacts from "./contacts/ContactsComponent";
import classes from "./Header.module.css";
import { companyName } from "../../Config";
import Search from "./search/Search";
import cartIcon from "./shopping-cart.png";
import userIcon from "./user.png";
import ProductsMenu from "./productsMenu/ProductsMenu";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.topNavBar}>
        <Contacts />
        <MainMenu />
      </div>
      <div className={classes.searchSection}>
        <a href="/products" className={classes.companyNameSection}>
          {companyName}
        </a>
        <Search />
        <div className={classes.iconsSection}>
          <img className={classes.icon} src={userIcon} alt="Sign-in icon" />
          <img
            className={classes.icon}
            src={cartIcon}
            alt="Shopping Cart Icon"
          />
        </div>
      </div>
      <ProductsMenu />
    </div>
  );
};

export default Header;
