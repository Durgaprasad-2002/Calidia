/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home_Multiple_Slider from "./Home_Multiple_Slider";

import { useInView } from "react-intersection-observer";
import "animate.css";

import rice from "../Images/Card-2/rice.jpeg";
import flour from "../Images/Card-2/flour.jpeg";
import veg from "../Images/Card-2/veg.jpeg";
import pulses from "../Images/Card-2/pulses.avif";

import fruits from "../Images/Card-2/fruits.webp";

export default function Card2() {
  const [ref1, view1] = useInView({
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  const { t } = useTranslation();
  let navigate = useNavigate();

  const toSubLAw = (ele) => {
    navigate("/quote", { state: ele });
  };
  return (
    <>
      <br />
      <br />
      <div className="descip-home-products">
        <h2 className="descip-home-products-head">
          <div
            ref={ref1}
            className={`content-section ${
              view1 ? `animate__animated animate__slideInLeft content-vis` : ""
            }`}
          >
            {t("card2_t1")}
          </div>{" "}
          <div
            ref={ref2}
            className={`content-section ${
              view2 ? `animate__animated animate__slideInRight content-vis` : ""
            }`}
          >
            {t("card2_t2")}
          </div>
        </h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid " id="outer-card2">
        <div className="row">
          <Home_Multiple_Slider
            sub={toSubLAw}
            dir={false}
            title={t("card2_t10")}
            descprition={t("card2_t3")}
            link={"rice"}
            img={rice}
            key={1}
          />
        </div>
        <div className="row">
          <Home_Multiple_Slider
            sub={toSubLAw}
            dir={true}
            title={t("card2_t11")}
            descprition={t("card2_t5")}
            link={"Pulses"}
            img={pulses}
            key={1}
          />
        </div>
        <div className="row">
          <Home_Multiple_Slider
            dir={false}
            sub={toSubLAw}
            title={t("card2_t12")}
            descprition={t("card2_t6")}
            link={"Flours"}
            img={flour}
            key={1}
          />
        </div>

        <div className="row">
          <Home_Multiple_Slider
            dir={true}
            sub={toSubLAw}
            title={t("card2_t14")}
            descprition={t("card2_t7")}
            link={"Fruits"}
            img={fruits}
            key={1}
          />
        </div>

        <div className="row">
          <Home_Multiple_Slider
            dir={false}
            sub={toSubLAw}
            title={t("card2_t13")}
            descprition={t("card2_t8")}
            link={"Vegetables"}
            img={veg}
            key={1}
          />
        </div>
      </div>
    </>
  );
}
