import React from "react";
import classes from "./ProductsTags.module.css";
import { popularTags } from "../../../static/dataWebsite";
import Tag from "./Tag";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../store/reducers/productsSlice";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const ProductsTag: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector(
    (state: RootState) => state.products.filters.productType
  );

  const onSelect = (item: string) => {
    if (filter === item) {
      dispatch(filterProducts({ filter: "productType", value: "" }));
    } else {
      history.push("/products");
      dispatch(filterProducts({ filter: "productType", value: item }));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <h4>Product tags </h4>
      <ul className={classes.tags}>
        {popularTags.map((item) => {
          return (
            <Tag
              selectedTag={filter}
              handleClick={onSelect.bind(null, item)}
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
