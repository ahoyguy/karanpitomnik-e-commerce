import React, { useState } from "react";
import Icons from "../assets/images/icons.svg";
import { useSelector } from "react-redux";

const Gallery = ({ parentClass }) => {
  const { productItems } = useSelector((store) => store.product);
  const [index, setIndex] = useState(0);
  const { url = "/uploads/Brabant_78e74491f9.jpg", title = "Brabant" } =
    productItems[index].attributes.image.data.attributes || {};

  const checkIndex = (index, type = null) => {
    const lastSlide = productItems.length - 1;
    if (index === 0 && type === "left") {
      index = lastSlide;
    }
    if (index === lastSlide && type === "rigth") {
      index = 0;
    }
    return index;
  };
  return (
    <div className={`${parentClass}__gallery hero-gallery`}>
      <div className="hero-gallery">
        <h2 className="hero-gallery__title">Галлерея растений</h2>
        <img src={`http://localhost:1337${url}`} alt={title} />
        <div
          className="hero-gallery__arrow hero-gallery__arrow--left"
          onClick={() => setIndex(checkIndex(index, "left") - 1)}
        >
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-left`} />
          </svg>
        </div>
        <div
          className="hero-gallery__arrow hero-gallery__arrow--right"
          onClick={() => setIndex(checkIndex(index, "rigth") + 1)}
        >
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-right`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
