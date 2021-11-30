import React from "react";
import classes from "./MainMenu.module.css";
import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <ul className={classes.container}>
      <li>
        <Link className={classes.menuItem} to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className={classes.menuItem} to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link className={classes.menuItem} to="/careers">
          Careers
        </Link>
      </li>
    </ul>
  );
};

export default MainMenu;
