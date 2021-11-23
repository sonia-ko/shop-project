import React from "react";
import Slider from "../rangeSlider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import { RootState } from "../../store/store";

const PriceFilter: React.FC = () => {
  const dispatch = useDispatch();

  const defaultMin = useSelector((state: RootState) =>
    Math.floor(state.products.minPrice)
  );

  const defaultMax = useSelector((state: RootState) =>
    Math.ceil(state.products.maxPrice)
  );

  const filtersEnabled = useSelector(
    (state: RootState) => state.products.filters.price.length
  );
  return (
    <div className="sidebarSection">
      <h3>Price</h3>
      <Slider
        min={defaultMin}
        max={defaultMax}
        onChange={({ min, max }: { min: number; max: number }) => {
          dispatch(filterProducts({ filter: "price", value: [min, max] }));
        }}
        filterEnabled={filtersEnabled > 0}
      />
    </div>
  );
};

export default PriceFilter;
