import React from "react";
import LinksList from "./LinksList";
import classes from "./SocialLinksBlock.module.css";

const SocialLinksBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      <LinksList />
      <LinksList />
      <LinksList />
      <LinksList />
    </div>
  );
};

export default SocialLinksBlock;
