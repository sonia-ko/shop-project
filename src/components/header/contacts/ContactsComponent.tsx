import React from "react";
import { companyPhoneNum } from "../../../Config";
import { companyEmail } from "../../../Config";
import classes from "./Contacts.module.css";

const Contacts: React.FC = () => {
  const emailLink: string = `mailto:${companyEmail}`;
  const phoneLink: string = `tel:${companyPhoneNum}`;

  return (
    <div className={classes.contacts}>
      <ul className={classes.contactsList}>
        <li className={classes.contactsItem}>
          <a href="/support">Chat with us</a>
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
