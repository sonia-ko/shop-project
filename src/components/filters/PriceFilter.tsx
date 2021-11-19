import React from "react";
import Slider from "../rangeSlider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import { useEffect } from "react";

import { useState } from "react";
import { RootState } from "../../store/store";

const PriceFilter: React.FC = () => {
  const dispatch = useDispatch();

  const defaultMin = useSelector((state: RootState) => state.products.minPrice);
  const defaultMax = useSelector((state: RootState) => state.products.maxPrice);
  const products = useSelector(
    (state: RootState) => state.products.allProducts
  );

  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);

  useEffect(() => {
    setMin(defaultMin);
    setMax(defaultMax);
  }, [defaultMin, defaultMax, products]);

  return (
    <div className="sidebarSection">
      <h3>Price</h3>
      <Slider
        min={defaultMin}
        max={defaultMax}
        onChange={({ min, max }: { min: number; max: number }) => {
          setMin(min);
          setMax(max);
          dispatch(filterProducts({ filter: "price", value: [min, max] }));
        }}
      />
    </div>
  );
};

export default PriceFilter;
