import React from "react";
import classnames from "classnames";
import classes from "./MobileContacts.module.css";
import { useState } from "react";
import Contacts from "../contacts/ContactsComponent";
import MainMenu from "../mainMenu/MainMenu";

const MobileContacts: React.FC = () => {
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
          <h5 className={classes.heading}> Popular pages: </h5>
          <MainMenu />
          <h5 className={classes.heading}> Our contacts: </h5>
          <Contacts />
        </div>

        <div className={classes.menuContainer} onClick={openMenu}>
          <div
            className={classnames(
              `${classes.bar1} ${classes["menu-icon-bar"]}`
            )}
          ></div>
          <div
            className={classnames(
              `${classes.bar2} ${classes["menu-icon-bar"]}`
            )}
          ></div>
          <div
            className={classnames(
              `${classes.bar3} ${classes["menu-icon-bar"]}`
            )}
          ></div>
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

export default MobileContacts;
