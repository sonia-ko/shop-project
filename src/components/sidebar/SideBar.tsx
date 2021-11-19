import BrandsFilter from "../filters/BrandsFilter";
import CategoriesFilter from "../filters/CategoriesFilter";
import PriceFilter from "../filters/PriceFilter";
import RatingFilter from "../filters/RatingFilter";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/reducers/productsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Sidebar = () => {
  const dispatch = useDispatch();
  const productsFetched = useSelector(
    (state: RootState) => state.products.productsFetched
  );

  return (
    <aside>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      {productsFetched ? <PriceFilter /> : null}
      <Button
        btnStyle="light"
        btnText="Reset"
        onClick={() => dispatch(resetFilters())}
      />
    </aside>
  );
};

export default Sidebar;
