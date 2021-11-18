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
  // const minPrice = useSelector((state: RootState) =>
  //   Math.floor(state.products.minPrice)
  // );
  // const maxPrice = useSelector((state: RootState) =>
  //   Math.ceil(state.products.maxPrice)
  // );

  // console.log(maxPrice);

  return (
    <aside>
      <CategoriesFilter />
      <BrandsFilter />
      <RatingFilter />
      <PriceFilter defaultMin={1} defaultMax={998} />
      <Button
        btnStyle="light"
        btnText="Reset"
        onClick={() => dispatch(resetFilters())}
      />
    </aside>
  );
};

export default Sidebar;
