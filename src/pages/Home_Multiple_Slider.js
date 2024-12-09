import React from "react";

import { useInView } from "react-intersection-observer";
import "animate.css";

import "./index.css";
import { Link } from "react-router-dom";

export default function Home_Multiple_Slider({
  dir,
  img,
  title,
  descprition,
  link,
  animationStyle1 = "animate__slideInLeft",
  animationStyle2 = "animate__slideInRight",
  sub,
}) {
  const [ref1, view1] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });
  return (
    <>
      <div
        className="Expand-container"
        style={{ flexDirection: dir ? "row-reverse" : "row" }}
      >
        <div
          ref={ref1}
          className={`img-box content-section ${
            view1 ? `animate__animated ${animationStyle1} content-vis` : ""
          }`}
        >
          <img src={img} alt="Content-img" className="expand-img" />
        </div>

        <div
          ref={ref2}
          className={`info-box content-section ${
            view2 ? `animate__animated ${animationStyle2} content-vis` : ""
          }`}
        >
          <h2 className="slider-title">{title}</h2>

          <p className="slider-description"> {descprition}</p>

          <button onClick={() => sub(link)} className="link-slider">
            SHOP
          </button>
        </div>
      </div>
    </>
  );
}
