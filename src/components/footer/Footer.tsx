import React from "react";
import classes from "./Footer.module.css";
import ProductsTag from "./productTags/ProductTags";
import SocialLinksBlock from "./socialLinksBlock/SocialLinksBlock";
import CopyRightBlock from "./copyRightBlock/CopyRightBlock";

const Footer: React.FC = () => {
  return (
    <footer className={classes.container}>
      <SocialLinksBlock />
      <ProductsTag />
      <CopyRightBlock />
    </footer>
  );
};

export default Footer;
