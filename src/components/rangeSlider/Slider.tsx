import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import classnames from "classnames";
import classes from "./Slider.module.css";

interface SliderProps {
  min: number;
  max: number;
  onChange: Function;
  filterEnabled: boolean;
}

const Slider: FC<SliderProps> = ({ min, max, onChange, filterEnabled }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterEnabled) {
      setMinVal(min);
      setMaxVal(max);
    }
  }, [filterEnabled, min, max]);

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

  const onMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    event.target.value = value.toString();
    onChange({ min: minVal, max: maxVal });
  };

  const onMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    event.target.value = value.toString();
    onChange({ min: minVal, max: maxVal });
  };

  const onInputMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 0) {
      event.target.value = minVal.toString();
      return;
    }
    if (!event.target.value || event.target.value === "0") {
      event.target.value = "0";
      setMinVal(0);
      return;
    }
    const value = Math.min(+event.target.value, maxVal - 1);
    event.target.value = value.toString();
    setMinVal(value);
    onChange({ min: minVal, max: maxVal });
  };

  const onInputMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.style.backgroundColor = "transparent";
    if (Number(event.target.value) > max) {
      event.target.value = maxVal.toString();
      event.target.style.backgroundColor = "#f2d3d3";
      return;
    }
    if (!event.target.value || event.target.value === "0") {
      setMaxVal(0);
      event.target.value = "0";
      return;
    }
    if (+event.target.value < minVal) {
      event.target.style.backgroundColor = "#f2d3d3";
    }

    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(+event.target.value);
    event.target.value = value.toString();
    onChange({ min: minVal, max: maxVal });
  };

  return (
    <div className={classes.slider}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={onMinValueChange}
        className={classnames(
          `${classes.thumb} ${classes["thumb--left"]} ${classes.zindex3}`,
          {
            zindex5: minVal > max - 100,
          }
        )}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={onMaxValueChange}
        className={classnames(classes.thumb, classes.zindex4)}
      />
      <div className={classes["slider__track"]}></div>
      <div ref={range} className={classes["slider__range"]}></div>

      <div className={classes["slider__left-value"]}>
        <label className={classes.label} htmlFor="rangeMin">
          Min
        </label>
        <input
          id="rangeMin"
          className={classes.numberInput}
          value={minVal}
          type="number"
          onChange={onInputMinValueChange}
        />
      </div>
      <div className={classes["slider__right-value"]}>
        <label className={classes.label} htmlFor="rangeMax">
          Max
        </label>
        <input
          id="rangeMax"
          max={max}
          className={classes.numberInput}
          placeholder={maxVal.toString()}
          value={maxVal}
          type="number"
          onChange={onInputMaxValueChange}
        />
      </div>
    </div>
  );
};

export default Slider;
