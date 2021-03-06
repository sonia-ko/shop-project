import React from "react";
import LinksList from "./LinksList";
import classes from "./SocialLinksBlock.module.css";
import { footerLinks } from "../../../static/dataCompany";

const SocialLinksBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      {footerLinks.map((item) => {
        return (
          <LinksList
            key={"footerLink" + item.name}
            sectionName={item.name}
            links={item.links}
          />
        );
      })}
    </div>
  );
};

export default SocialLinksBlock;
