import React from "react";
import "./index.css";

import { useTranslation } from "react-i18next";
import card1 from "../Images/Scroll-images/sc7.webp";
import card2 from "../Images/Scroll-images/sc1.webp";
import card3 from "../Images/Scroll-images/sc2.webp";
import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Features_card() {
  const { t } = useTranslation();

  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref2}
      className={`Features content-section ${
        view2 ? `animate__animated animate__backInUp content-vis` : ""
      }`}
    >
      <div class="carousel-wrapper">
        <h2 className="title-feature-head">Our Commitment</h2>
        <div class="infinity carousel">
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

          <div class="navigation">
            <label for="slides_1" class="slide" matRipple>
              <h3>{t("card1_t1")}</h3>
              <p>{t("card1_t2")}</p>
            </label>

            <label for="slides_2" class="slide" matRipple>
              <h3>{t("card1_t3")}</h3>
              <p>{t("card1_t4")}</p>
            </label>

            <label for="slides_3" class="slide" matRipple>
              <h3>{t("card1_t5")}</h3>
              <p>{t("card1_t6")}</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
