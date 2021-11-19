import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceFilter from "../filters/PriceFilter";
import RatingFilter from "../filters/RatingFilter";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/reducers/productsSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <aside>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceFilter />
      <Button
        btnStyle="light"
        btnText="Reset"
        onClick={() => dispatch(resetFilters())}
      />
    </aside>
  );
};

export default Sidebar;
