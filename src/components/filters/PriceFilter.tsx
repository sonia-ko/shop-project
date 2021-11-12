import React from "react";
import RangeSlider from "../rangeSlider/RangeSlider";
import Slider from "../rangeSlider/Slider";
import { useState } from "react";

interface PriceFilterProps {
  defaultMin: number;
  defaultMax: number;
}
const PriceFilter: React.FC<PriceFilterProps> = ({
  defaultMin,
  defaultMax,
}) => {
  const [min, setMin] = useState(defaultMin);
  const [max, setMax] = useState(defaultMax);

  return (
    <div className="sidebarSection">
      <h3>Price</h3>
      <Slider
        min={defaultMin}
        max={defaultMax}
        onChange={({ min, max }: { min: number; max: number }) => {
          setMin(min);
          setMax(max);
        }}
      />
    </div>
  );
};

export default PriceFilter;
