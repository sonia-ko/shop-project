import React from "react";
import classes from "./MainMenu.module.css";
import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <nav className={classes.mainMenuContainer}>
      <ul className={classes.menuItems}>
        <li className={classes.menuItem}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={classes.menuItem}>
          <Link to="/careers">Careers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
