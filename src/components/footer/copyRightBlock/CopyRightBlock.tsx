import React from "react";
import { pageOwner, copyrightYear } from "../../../static/WebsiteData";
import classes from "./CopyRight.module.css";

const CopyRightBlock: React.FC = () => {
  return (
    <div className={classes.copyRight}>
      Copyright © {copyrightYear} {pageOwner}
    </div>
  );
};

export default CopyRightBlock;
