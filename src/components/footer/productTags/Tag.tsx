import React from "react";
import classes from "./Tag.module.css";

interface TagProps {
  tagText: string;
  handleClick: () => void;
}

const Tag: React.FC<TagProps> = ({ tagText, handleClick }) => {
  return (
    <li onClick={handleClick} className={classes.tag}>
      {tagText}
    </li>
  );
};

export default Tag;
