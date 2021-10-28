import React from "react";
import { companyPhoneNum } from "../../../Config";
import { companyEmail } from "../../../Config";
import classes from "./Contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div className={classes.contacts}>
      <ul>
        <li>Chat with us</li>
        <li>{companyPhoneNum}</li>
        <li>{companyEmail}</li>
      </ul>
    </div>
  );
};

export default Contacts;
