import React from "react";
import { companyPhoneNum } from "../../../Config";
import { companyEmail } from "../../../Config";
import classes from "./Contacts.module.css";
import { useHistory } from "react-router";

const Contacts: React.FC = () => {
  const emailLink: string = `mailto:${companyEmail}`;
  const phoneLink: string = `tel:${companyPhoneNum}`;
  const history = useHistory();

  return (
    <div className={classes.contacts}>
      <ul className={classes.contactsList}>
        <li
          className={classes.contactsItem}
          onClick={() => history.push("/support")}
        >
          Chat with us
        </li>

        <li className={classes.contactsItem}>
          <a href={phoneLink}>+{companyPhoneNum}</a>
        </li>

        <li className={classes.contactsItem}>
          <a href={emailLink}>{companyEmail}</a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
