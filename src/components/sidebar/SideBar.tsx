import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import RatingFilter from "../filters/RatingFilter";
import classes from "./SideBar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
    </div>
  );
};

export default Sidebar;
