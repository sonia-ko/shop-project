import React from "react";
import classes from "./PriceRange.module.css";
import RangeSlider from "../../RangeSlider/RangeSlider";

const PriceRange: React.FC<{
  defaultMin: number;
  defaultMax: number;
  id: string;
  name: string;
}> = (props) => {
  return (
    <form>
      <h3>Price</h3>

      <RangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </form>
  );
};

export default PriceRange;
