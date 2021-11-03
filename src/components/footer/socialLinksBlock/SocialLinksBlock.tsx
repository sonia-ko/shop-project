import React from "react";
import LinksList from "./LinksList";
import classes from "./SocialLinksBlock.module.css";
import {
  Connections,
  Earnings,
  Account,
  GetInTouch,
} from "../../../static/CompanyData";

const SocialLinksBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      <LinksList sectionName={"Get in touch"} links={GetInTouch} />
      <LinksList sectionName={"Connections"} links={Connections} />
      <LinksList sectionName={"Earnings"} links={Earnings} />
      <LinksList sectionName={"Account"} links={Account} />
    </div>
  );
};

export default SocialLinksBlock;
