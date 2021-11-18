import React from "react";
import Slider from "../rangeSlider/Slider";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import { useState } from "react";

interface PriceFilterProps {
  defaultMin: number;
  defaultMax: number;
}
const PriceFilter: React.FC<PriceFilterProps> = ({
  defaultMin,
  defaultMax,
}) => {
  const dispatch = useDispatch();

  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);

  console.log(min, max);

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
