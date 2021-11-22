import React from "react";
import classes from "./SortingButton.module.css";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../../../store/reducers/productsSlice";
import { SortingModel } from "../../../../interfaces/sorting";

const SortingButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let obj: SortingModel = {
      key: "price",
      order: event.target.value.split("-")[1] === "asc" ? "asc" : "desc",
    };

    switch (event.target.value.split("-")[0]) {
      case "rate":
        obj.key = "rate";
        break;
      case "id":
        obj.key = "id";
        break;
      default:
        obj.key = "price";
    }

    dispatch(sortProducts(obj));
  };

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="sortBy">
        Sort By:
      </label>
      <select
        onChange={handleChange}
        className={classes.selectBox}
        name="sort By"
        id="sortBy"
      >
        <option value="id-desc">Select</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
        <option value="rate-asc">Rate ↑</option>
        <option value="rate-desc">Rate ↓</option>
        <option value="id-asc">Old ↑</option>
        <option value="id-desc">New ↓</option>
      </select>
    </div>
  );
};

export default SortingButton;
