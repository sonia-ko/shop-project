import React from "react";
import LinksList from "./LinksList";
import classes from "./SocialLinksBlock.module.css";
import { footerLinks } from "../../../static/CompanyData";

const SocialLinksBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      {footerLinks.map((item) => {
        return (
          <LinksList
            key={"linksLins" + item.name}
            sectionName={item.name}
            links={item.links}
          />
        );
      })}
    </div>
  );
};

export default SocialLinksBlock;
