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

const MobileSidebar: React.FC = () => {
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
            onClick={() => setMenuOpened(false)}
            className={classes.closeMenuBtn}
          >
            &times;
          </button>
          <CategoriesFilter />
          <BrandsFilter />
          <RatingFilter />
          <PriceFilter />
          <Button
            btnText="Set filters"
            onClick={() => setMenuOpened(false)}
            btnStyle="greenCentered"
          />

          {/* 
        <a href="#about" className={classes.navItem}>
          Item
        </a>
        <a href="#experience" className={classes.navItem}>
          Item
        </a>
        <a href="#projects" className={classes.navItem}>
          Item
        </a> */}
        </div>

        <div className={classes.menuContainer}>
          {/* <div
            className={classnames(
              `${classes.bar1} ${classes["menu-icon-bar"]}`
            )}
          ></div>
          <div>
            className={classnames(
              `${classes.bar2} ${classes["menu-icon-bar"]}`
            )}
          ></div>
          <div
            className={classnames(
              `${classes.bar3} ${classes["menu-icon-bar"]}`
            )}
          ></div> */}

          <Button
            btnIconBefore={FilterIcon}
            btnText="Set filters"
            onClick={openMenu}
            btnStyle="green"
          />
        </div>
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
