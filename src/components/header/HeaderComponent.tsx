import React from "react";
import MainMenu from "./mainMenu/MainMenu";
import Contacts from "./contacts/ContactsComponent";
import classes from "./Header.module.css";
import { companyName } from "../../static/CompanyData";
import Search from "./search/Search";
import cartIcon from "../../assets/ic-ecommerce-basket.png";
import userIcon from "../../assets/ic-actions-user.png";
import ProductsMenu from "./productsMenu/ProductsMenu";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className={classes.topNavBar}>
        <Contacts />
        <MainMenu />
      </div> <hr/>
      <div className={classes.searchSection}>
        <Link className={classes.companyNameSection} to="/products">
          {companyName}
        </Link>
        <Search />
        <div className={classes.iconsSection}>
          <Link to="/login">
            <img className={classes.loginIcon} src={userIcon} alt="" />
          </Link>
          <Link to="/cart">
            <img
              className={classes.cartIcon}
              src={cartIcon}
              alt="Shopping Cart Icon"
            />
          </Link>
        </div>
      </div>
      <ProductsMenu />
    </header>
  );
};

export default Header;
