import React, { useState, useEffect } from "react";
import "../index.css";
import "../styles.css";
import Img1 from "../../Images/CoverImages/cv-1.jpg";
import Img2 from "../../Images/CoverImages/cv-2.jpg";
import Img3 from "../../Images/CoverImages/cv-3.jpg";
// import Img4 from "../../Images/CoverImages/cv4.webp";
import { useTranslation } from "react-i18next";

const images = [Img1, Img2, Img3];

const Slider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="cr-slider-container">
        <div
          className="cr-image-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide ${index + 1}`}
              className="cr-slider-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
