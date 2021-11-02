import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceRange from "../filters/PriceRange/PriceRange";
import RatingFilter from "../filters/RatingFilter";
import classes from "./SideBar.module.css";
import ButtonLight from "../buttons/ButtonLight";

const Sidebar = () => {
  const resetFilters = () => {
    console.log("filters reset :) ");
  };

  return (
    <div className={classes.sidebar}>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceRange defaultMin={0} defaultMax={1000} />
      <ButtonLight btnText={"Reset"} onClick={resetFilters}></ButtonLight>
    </div>
  );
};

export default Sidebar;
