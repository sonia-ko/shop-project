import React from "react";
import classes from "./MainMenu.module.css";
import { useHistory } from "react-router";

const MainMenu: React.FC = () => {
  const history = useHistory();
  return (
    <nav className={classes.mainMenuContainer}>
      <ul className={classes.menuItems}>
        <li className={classes.menuItem} onClick={() => history.push("/blog")}>
          Blog
        </li>
        <li className={classes.menuItem} onClick={() => history.push("/about")}>
          About Us
        </li>
        <li
          className={classes.menuItem}
          onClick={() => history.push("/careers")}
        >
          Careers
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
