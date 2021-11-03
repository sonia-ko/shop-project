import React from "react";
import RangeSlider from "../../RangeSlider/RangeSlider";

interface PriceFilterProps {
  defaultMin: number;
  defaultMax: number;
}
const PriceFilter: React.FC<PriceFilterProps> = ({
  defaultMin,
  defaultMax,
}) => {
  return (
    <form>
      <h3>Price</h3>
      <RangeSlider
        min={defaultMin}
        max={defaultMax}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </form>
  );
};

export default PriceFilter;
