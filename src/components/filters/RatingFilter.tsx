import React from "react";
import RowOfStars from "../rating/RowOfStars";
import CheckBox from "../checkBox/Checkbox";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../store/reducers/productsSlice";

import StarsRating from "../rating/StarsRating";

const RatingFilter: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebarSection">
      <h3>Rating</h3>

      <ul>
        <li>
          <CheckBox
            handleClick={() =>
              dispatch(filterProducts({ filter: "rate", value: 5 }))
            }
            item="5-star"
          >
            <StarsRating
              numberOfFilledStars={5}
              numberOfStars={5}
              itemName="5-star"
              starColor="golden"
            />
            {/* <RowOfStars
              starColor="golden"
              itemName="5-star"
              starsEmpty={[false, false, false, false, false]}
            /> */}
          </CheckBox>
        </li>
        <li>
          <CheckBox
            handleClick={() =>
              dispatch(filterProducts({ filter: "rate", value: 4 }))
            }
            item="4-star"
          >
            <RowOfStars
              starColor="golden"
              itemName="4-star"
              starsEmpty={[false, false, false, false, true]}
            />
          </CheckBox>
        </li>
        <li>
          <CheckBox
            handleClick={() =>
              dispatch(filterProducts({ filter: "rate", value: 3 }))
            }
            item="3-star"
          >
            <RowOfStars
              starColor="golden"
              itemName="3-star"
              starsEmpty={[false, false, false, true, true]}
            />
          </CheckBox>
        </li>
        <li>
          <CheckBox
            handleClick={() =>
              dispatch(filterProducts({ filter: "rate", value: 2 }))
            }
            item="2-star"
          >
            <RowOfStars
              starColor="golden"
              itemName="2-star"
              starsEmpty={[false, false, true, true, true]}
            />
          </CheckBox>
        </li>
        <li>
          <CheckBox
            handleClick={() =>
              dispatch(filterProducts({ filter: "rate", value: 1 }))
            }
            item="1-star"
          >
            <RowOfStars
              starColor="golden"
              itemName="1-star"
              starsEmpty={[false, true, true, true, true]}
            />
          </CheckBox>
        </li>
      </ul>
    </div>
  );
};

export default RatingFilter;
