import React from "react";
import { pageOwner, copyrightYear } from "../../../static/dataWebsite";
import classes from "./CopyRight.module.css";

const CopyRightBlock: React.FC = () => {
  return (
    <div className={classes.container}>
      Copyright © {copyrightYear} {pageOwner}
    </div>
  );
};

export default CopyRightBlock;
