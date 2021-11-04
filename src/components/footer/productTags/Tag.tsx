import React from "react";
import classes from "./Tag.module.css";

interface TagsProps {
  tagText: string;
}
const Tag: React.FC<TagsProps> = ({ tagText }) => {
  return <li className={classes.tag}>{tagText}</li>;
};

export default Tag;
