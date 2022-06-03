import React from "react";
import { useSelector } from "react-redux";
import Icons from "../assets/images/icons.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";  
import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import "swiper/css/autoplay";

const GallerySwiper = ({ parentClass }) => {
  const { productItems:{products} } = useSelector((store) => store.product);
  return (
    <div className={`${parentClass}__gallery hero-gallery`}>
      <Swiper
        className="hero-gallery"
        modules={[Navigation, EffectFade, Autoplay]}
        navigation={{
          nextEl: '.hero-gallery__arrow--right',
          prevEl: '.hero-gallery__arrow--left',
        }}
        // effect={'fade'}
        speed={800}
        loop={'true'} 
        // autoplay     
      >
        <h2 className="hero-gallery__title">Галлерея растений</h2>
        {products.map((item) => {
          const { id, image, title } = item;
          return (
            <SwiperSlide key={id}>
              <img src={image} alt={title} />
            </SwiperSlide>
          );
        })}
        <div className="hero-gallery__arrow hero-gallery__arrow--left">
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-left`} />
          </svg>
        </div>
        <div className="hero-gallery__arrow hero-gallery__arrow--right">
          <svg>
            <use xlinkHref={`${Icons}#icon-arrow-right`} />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default GallerySwiper;
