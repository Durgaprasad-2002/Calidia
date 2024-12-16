import React from "react";
import "../index.css";

import { useTranslation } from "react-i18next";

import card1 from "../../Images/Scroll-images/sc7.webp";
import card2 from "../../Images/Scroll-images/sc1.webp";
import card3 from "../../Images/Scroll-images/sc2.webp";

import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Features_card() {
  //variables and state
  const { t } = useTranslation();
  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref2}
      className={`Features content-section ${
        view2 ? `animate__animated animate__flipInX content-vis` : ""
      }`}
    >
      <div className="carousel-wrapper">
        <h2 className="title-feature-head">Our Commitment</h2>
        <div className="infinity carousel">
          <input type="radio" name="slides" id="slides_1" />
          <input type="radio" name="slides" id="slides_2" />
          <input type="radio" name="slides" id="slides_3" />
          <ul>
            <li>
              <img
                className="img-feature"
                src={card1}
                alt="Buy and sell with ease"
              />
            </li>

            <li>
              <img
                className="img-feature"
                src={card2}
                alt="Store and send securely"
              />
            </li>

            <li>
              <img
                className="img-feature"
                src={card3}
                alt="Save and earn interest"
              />
            </li>
          </ul>

          <div className="navigation">
            <label htmlFor="slides_1" className="slide" matripple="true">
              <h3>{t("card1_t1")}</h3>
              <p>{t("card1_t2")}</p>
            </label>

            <label htmlFor="slides_2" className="slide" matripple="true">
              <h3>{t("card1_t3")}</h3>
              <p>{t("card1_t4")}</p>
            </label>

            <label htmlFor="slides_3" className="slide" matripple="true">
              <h3>{t("card1_t5")}</h3>
              <p>{t("card1_t6")}</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
