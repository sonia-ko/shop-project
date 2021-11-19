import React from "react";
import CheckBox from "../checkBox/Checkbox";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";
import StarsRating from "../rating/StarsRating";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RatingFilter: React.FC = () => {
  const dispatch = useDispatch();
  const maxRating = useSelector((state: RootState) => state.products.maxRating);
  const ratingElements = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className="sidebarSection">
      <h3>Rating</h3>

      <ul>
        {ratingElements.map((el) => {
          return (
            <li key={"ratingilterRow" + el}>
              <CheckBox
                handleClick={() =>
                  dispatch(filterProducts({ filter: "rate", value: el }))
                }
                item={el + "-star"}
              >
                <StarsRating
                  numberOfFilledStars={el}
                  numberOfStars={maxRating}
                  itemName={el + "stars"}
                  starColor="golden"
                />
              </CheckBox>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RatingFilter;
