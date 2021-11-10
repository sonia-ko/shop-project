import React from "react";
import ProductsTag from "./productTags/ProductTags";
import SocialLinksBlock from "./socialLinksBlock/SocialLinksBlock";
import CopyRightBlock from "./copyRightBlock/CopyRightBlock";

const Footer: React.FC = () => {
  return (
    <footer>
      <SocialLinksBlock />
      <ProductsTag />
      <CopyRightBlock />
    </footer>
  );
};

export default Footer;
