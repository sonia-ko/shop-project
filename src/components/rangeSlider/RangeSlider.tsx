import { ChangeEvent, useCallback, useEffect, useState, useRef } from "react";
import React from "react";
import classes from "./RangeSlider.module.css";
import rangeSliderModel from "../../interfaces/rangeSliderModel";
import classnames from "classnames";

// the functionality of this component will be improved sooner, once I have the products
const RangeSlider: React.FC<rangeSliderModel> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div>
      <div className={classes.container}></div>
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
        className={classnames("thumb thumb--zindex-3", {
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
        <div className={classes.numberInputsContainer}>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="range-input-min">
              Min:
            </label>
            <input
              id="range-input-min"
              className={classes.sliderLeftValue}
              value={minVal}
              type="number"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
              }}
            />
          </div>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="range-input-max">
              Max:
            </label>
            <input
              id="range-input-max"
              className={classes.sliderRightValue}
              value={maxVal}
              type="number"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                const value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
