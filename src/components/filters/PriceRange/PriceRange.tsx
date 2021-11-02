import React from "react";

import RangeSlider from "../../RangeSlider/RangeSlider";

const PriceRange: React.FC<{
  defaultMin: number;
  defaultMax: number;
}> = (props) => {
  return (
    <form>
      <h3>Price</h3>
      <RangeSlider
        min={props.defaultMin}
        max={props.defaultMax}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
        }
      />
    </form>
  );
};

export default PriceRange;
