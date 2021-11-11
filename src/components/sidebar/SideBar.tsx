import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceFilter from "../filters/PriceFilter";
import RatingFilter from "../filters/RatingFilter";
import Button from "../buttons/Button";

const Sidebar = () => {
  const resetFilters = () => {
    console.log("filters reset :) ");
  };

  return (
    <aside>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceFilter defaultMin={1} defaultMax={1000} />
      <Button btnStyle="light" btnText="Reset" onClick={resetFilters} />
    </aside>
  );
};

export default Sidebar;
