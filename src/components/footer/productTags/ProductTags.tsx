import React from "react";
import classes from "./ProductsTags.module.css";
import { popularTags } from "../../../static/WebsiteData";
import Tag from "./Tag";

const ProductsTag: React.FC = () => {
  return (
    <div className={classes.container}>
      <h3>Product tags </h3>
      <ul className={classes.tags}>
        {popularTags.map((item) => {
          return <Tag key={"tag" + item} tagText={item} />;
        })}
      </ul>
    </div>
  );
};

export default ProductsTag;
