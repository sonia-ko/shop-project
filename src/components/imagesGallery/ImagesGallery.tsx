import React from "react";
import classes from "./ImagesGallery.module.css";
import { Link } from "react-router-dom";
import { productCategories } from "../../static/dataWebsite";

interface ImagesGalleryProprs {
  images: string[];
}

const ImagesGallery: React.FC<ImagesGalleryProprs> = ({ images }) => {
  return (
    <div className={classes.container}>
      {images.map((image, i) => {
        return (
          <img
            key={image}
            className={classes["image" + i]}
            src={image}
            alt=""
          />
        );
      })}
    </div>
  );
};

export default ImagesGallery;
