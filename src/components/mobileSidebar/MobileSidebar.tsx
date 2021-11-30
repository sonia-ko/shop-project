import React from "react";
import classnames from "classnames";
import classes from "./MobileSidebar.module.css";
import { useState } from "react";
import BrandsFilter from "../filters/BrandsFilter";
import RatingFilter from "../filters/RatingFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceFilter from "../filters/PriceFilter";
import FilterIcon from "../../assets/filterIconWhite.png";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/reducers/productsSlice";

const MobileSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened(true);
  };

  return (
    <>
      <nav className={classes.sideMenu}>
        <div
          id="mySidenav"
          className={classnames(
            `${classes.sidenav} ${menuOpened ? classes.sidenavOpened : ""} `
          )}
        >
          <button
            className={classes.closeMenuBtn}
            onClick={() => setMenuOpened(false)}
          >
            &times;
          </button>
          <CategoriesFilter />
          <BrandsFilter />
          <RatingFilter />
          <PriceFilter />
          <div className={classes.buttonsSection}>
            <Button
              btnText="Set filters"
              onClick={() => setMenuOpened(false)}
              btnStyle="greenCentered"
            />

            <Button
              btnStyle="light"
              btnText="Reset"
              onClick={() => dispatch(resetFilters())}
            />
          </div>
        </div>

        <Button
          btnIconBefore={FilterIcon}
          btnText="Set filters"
          onClick={openMenu}
          btnStyle="green"
        />
      </nav>

      <div
        onClick={() => setMenuOpened(false)}
        className={classnames(
          `${classes.overlay} ${menuOpened ? "" : classes.hidden}`
        )}
      ></div>
    </>
  );
};

export default MobileSidebar;
