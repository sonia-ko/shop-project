import React from "react";
import classnames from "classnames";
import classes from "./Tag.module.css";

interface TagProps {
  tagText: string;
  handleClick: () => void;
  selectedTag: string;
}

const Tag: React.FC<TagProps> = ({ tagText, handleClick, selectedTag }) => {
  return (
    <li
      onClick={() => {
        handleClick();
      }}
      className={classnames(
        classes.tag,
        tagText === selectedTag ? classes.selected : null
      )}
    >
      {tagText}
    </li>
  );
};

export default Tag;
