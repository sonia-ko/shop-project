import React from "react";
import classes from "./ProductsTags.module.css";
import { popularTags } from "../../../static/dataWebsite";
import Tag from "./Tag";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../store/reducers/productsSlice";

const ProductsTag: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <h4>Product tags </h4>
      <ul className={classes.tags}>
        {popularTags.map((item) => {
          return (
            <Tag
              handleClick={() =>
                dispatch(filterProducts({ filter: "productType", value: item }))
              }
              key={"tag" + item}
              tagText={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsTag;
