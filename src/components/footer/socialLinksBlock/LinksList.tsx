import React from "react";
import classes from "./LinksList.module.css";
import { Link } from "react-router-dom";

interface LinksListProps {
  links: Array<Array<string>>;
  sectionName: string;
}

const LinksList: React.FC<LinksListProps> = ({ links, sectionName }) => {
  return (
    <div className={classes.container}>
      <h4>{sectionName}</h4>
      <ul>
        {links.map((item) => {
          return (
            <li key={"footerLink" + item}>
              {item[1].startsWith("http") ? (
                <a
                  rel="noreferrer"
                  target="_blank"
                  className={classes.item}
                  href={item[1]}
                >
                  {item[0]}
                </a>
              ) : (
                <Link className={classes.item} to={item[1]}>
                  {item[0]}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksList;
