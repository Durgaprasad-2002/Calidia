import React, { useState } from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import "./styles.css";

import Img1 from "../../Images/CoverImages/cv1.jpg";
import Img2 from "../../Images/CoverImages/cv2.jpg";
import Img3 from "../../Images/CoverImages/cv3.jpg";
import Img4 from "../../Images/CoverImages/cv4.jpg";

import { useTranslation } from "react-i18next";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    img: Img1,
  },
  {
    img: Img2,
  },
  {
    img: Img3,
  },
  {
    img: Img4,
  },
];
const Slider = () => {
  const { t } = useTranslation();

  return (
    <div className="parent">
      <div className="Text-over-outer">
        <div className="Text-over">
          <h3>
            <i>{t("footer_t1")}</i> {t("navbar_t1")}
          </h3>
          <p>{t("slider_t1")}</p>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        partialVisible={true}
        arrows={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.img} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
