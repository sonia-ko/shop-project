import React from "react";
import { useDispatch } from "react-redux";
import {
  resetFilters,
  setPage,
  sortProducts,
} from "../../store/reducers/productsSlice";
import classnames from "classnames";
import menuIcon from "../../assets/menuIconWithCheckMark.png";
import MainMenu from "./mainMenu/MainMenu";
import Contacts from "./contacts/ContactsComponent";
import classes from "./Header.module.css";
import { companyName } from "../../static/dataCompany";
import Search from "./search/Search";
import cartIcon from "../../assets/ic-ecommerce-basket.png";
import userIcon from "../../assets/ic-actions-user.png";
import ProductsMenu from "./productsMenu/ProductsMenu";
import { Link } from "react-router-dom";
import MobileContacts from "./mobileContacts/MobileContacts";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetFilters());
    dispatch(
      sortProducts({
        key: "id",
        order: "desc",
      })
    );
    dispatch(setPage(1));
  };

  return (
    <header>
      <div className={classes.topNavBar}>
        <Contacts />
        <MainMenu />
      </div>
      <hr />
      <div className={classes.searchSection}>
        <Link
          onClick={handleClick}
          className={classes.companyNameSection}
          to="/products"
        >
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
          <MobileContacts />
        </div>
      </div>
      <ProductsMenu />
    </header>
  );
};

export default Header;
