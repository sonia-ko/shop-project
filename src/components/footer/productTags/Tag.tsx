import React from "react";
import classes from "./Tag.module.css";

interface TagProps {
  tagText: string;
}

const Tag: React.FC<TagProps> = ({ tagText }) => {
  return <li className={classes.tag}>{tagText}</li>;
};

export default Tag;
