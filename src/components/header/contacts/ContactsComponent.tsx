import React from "react";
import { companyEmail, companyPhoneNum } from "../../../static/CompanyData";

import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";

const Contacts: React.FC = () => {
  const emailLink: string = `mailto:${companyEmail}`;
  const phoneLink: string = `tel:${companyPhoneNum}`;

  return (
    <div className={classes.contacts}>
      <ul className={classes.contactsList}>
        <li className={classes.contactsItem}>
          <Link to="/support">Chat with us</Link>
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
