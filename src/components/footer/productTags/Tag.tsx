import React from "react";
import classes from "./Tag.module.css";

const Tag: React.FC<{
  tagText: string;
}> = (props) => {
  return <div className={classes.tag}>{props.tagText}</div>;
};

export default Tag;
