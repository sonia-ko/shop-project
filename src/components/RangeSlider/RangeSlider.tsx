import { ChangeEvent, useCallback, useEffect, useState, useRef } from "react";
import React from "react";
import classes from "./RangeSlider.module.css";
import rangeSliderModel from "../../models/rangeSliderModel";
import classnames from "classnames";

const RangeSlider: React.FC<rangeSliderModel> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={classes.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames(`${classes.thumb} ${classes.thumbZindex3}`, {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={classnames(`${classes.thumb} ${classes.thumbZindex4}`)}
      />

      <div className={classes.slider}>
        <div className={classes.sliderTrack}></div>
        <div ref={range} className={classes.sliderRange}></div>
        <div className={classes.rangeControls}>
          <div className={classes.inputs}>
            <div className={classes.inputsContainer}>
              <label className={classes.sliderLabel} htmlFor="range-input-min">
                Min:
              </label>
              <input
                id="range-input-min"
                className={classes.sliderLeftValue}
                value={minVal}
                type="number"
              />
            </div>
            <div className={classes.inputsContainer}>
              <label className={classes.sliderLabel} htmlFor="range-input-max">
                Max:
              </label>
              <input
                id="range-input-max"
                className={classes.sliderRightValue}
                value={maxVal}
                type="number"
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
