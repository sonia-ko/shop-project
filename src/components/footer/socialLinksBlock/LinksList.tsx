import React from "react";
import classes from "./LinksList.module.css";
import { Link } from "react-router-dom";

const LinksList: React.FC<{
  links: Array<Array<string>>;
  sectionName: string;
}> = (props) => {
  return (
    <div className={classes.container}>
      <h4>{props.sectionName}</h4>
      <ul className={classes.list}>
        {props.links.map((item) => {
          return (
            <li>
              {item[1].startsWith("http") ? (
                <a className={classes.item} href={item[1]}>
                  {" "}
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
