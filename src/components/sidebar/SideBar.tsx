import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceRange from "../filters/PriceRange/PriceRange";
import RatingFilter from "../filters/RatingFilter";
import classes from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceRange
        name={"product price"}
        id={"product-price"}
        defaultMin={0}
        defaultMax={100}
      />
    </div>
  );
};

export default Sidebar;
