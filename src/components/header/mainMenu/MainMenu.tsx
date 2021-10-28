import React from "react";
import classes from "./MainMenu.module.css";

const MainMenu: React.FC = () => {
  return (
    <nav className={classes.mainMenu}>
      <ul>
        <li>Blog</li>
        <li>About Us</li>
        <li>Careers</li>
      </ul>
    </nav>
  );
};

export default MainMenu;
