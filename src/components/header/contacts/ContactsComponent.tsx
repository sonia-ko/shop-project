import React from "react";
import { companyEmail, companyPhoneNum } from "../../../static/CompanyData";

import classes from "./Contacts.module.css";
import { Link } from "react-router-dom";

const Contacts: React.FC = () => {
  const emailLink: string = `mailto:${companyEmail}`;
  const phoneLink: string = `tel:${companyPhoneNum}`;

  return (
    <ul className="flex">
      <li>
        <Link className={classes.contactsItem} to="/support">
          Chat with us
        </Link>
      </li>

      <li>
        <a className={classes.contactsItem} href={phoneLink}>
          +{companyPhoneNum}
        </a>
      </li>

      <li>
        <a className={classes.contactsItem} href={emailLink}>
          {companyEmail}
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
