import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceFilter from "../filters/priceFilter/PriceFilter";
import RatingFilter from "../filters/RatingFilter";
import classes from "./SideBar.module.css";
import Button from "../buttons/Button";

const Sidebar = () => {
  const resetFilters = () => {
    console.log("filters reset :) ");
  };

  return (
    <div className={classes.sidebar}>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceFilter defaultMin={0} defaultMax={1000} />
      <Button btnStyle="light" btnText="Reset" onClick={resetFilters} />
    </div>
  );
};

export default Sidebar;
