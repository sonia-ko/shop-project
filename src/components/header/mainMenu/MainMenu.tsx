import React from "react";
import classes from "./MainMenu.module.css";
import { useHistory } from "react-router";

const MainMenu: React.FC = () => {
  const history = useHistory();
  return (
    <nav className={classes.mainMenuContainer}>
      <ul className={classes.menuItems}>
        <li className={classes.menuItem}>
          <a href="/blog">Blog</a>
        </li>
        <li className={classes.menuItem}>
          <a href="/about">About Us</a>
        </li>
        <li className={classes.menuItem}>
          <a href="/careers">Careers</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
