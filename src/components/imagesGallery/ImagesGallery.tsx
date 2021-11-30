import React from "react";
import classes from "./ImagesGallery.module.css";

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
            alt={"product" + i}
          />
        );
      })}
    </div>
  );
};

export default ImagesGallery;
