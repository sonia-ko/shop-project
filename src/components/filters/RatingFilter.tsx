import React from "react";
import RowOfStars from "./RatingElements/RowOfStars";
import CheckBox from "../Checkbox/Checkbox";

const RatingFilter: React.FC = () => {
  return (
    <>
      <h3>Rating</h3>

      <CheckBox item={"5-star"}>
        <RowOfStars
          itemName={"5-star"}
          starsEmpty={[false, false, false, false, false]}
        />
      </CheckBox>

      <CheckBox item={"4-star"}>
        <RowOfStars
          itemName={"4-star"}
          starsEmpty={[false, false, false, false, true]}
        />
      </CheckBox>

      <CheckBox item={"3-star"}>
        <RowOfStars
          itemName={"3-star"}
          starsEmpty={[false, false, false, true, true]}
        />
      </CheckBox>

      <CheckBox item={"2-star"}>
        <RowOfStars
          itemName={"2-star"}
          starsEmpty={[false, false, true, true, true]}
        />
      </CheckBox>

      <CheckBox item={"1-star"}>
        <RowOfStars
          itemName={"1-star"}
          starsEmpty={[false, true, true, true, true]}
        />
      </CheckBox>
    </>
  );
};

export default RatingFilter;
