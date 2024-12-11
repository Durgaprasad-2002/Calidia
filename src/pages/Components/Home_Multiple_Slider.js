import React from "react";
import "../index.css";

import { useInView } from "react-intersection-observer";
import "animate.css";

function Home_Multiple_Slider({
  dir,
  img,
  title,
  descprition,
  link,
  animationStyle1 = "animate__slideInLeft",
  animationStyle2 = "animate__slideInRight",
  sub,
}) {
  const animationStyleCM1 = dir ? animationStyle2 : animationStyle1;
  const animationStyleCM2 = dir ? animationStyle1 : animationStyle2;
  const [ref1, view1] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
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
            view1 ? `animate__animated ${animationStyleCM1} content-vis` : ""
          }`}
          style={{ minHeight: "300px" }}
        >
          <img src={img} alt="Content-img" className="expand-img" />
        </div>

        <div
          ref={ref2}
          className={`info-box content-section ${
            view2 ? `animate__animated ${animationStyleCM2} content-vis` : ""
          }`}
        >
          <h2 className="slider-title">{title}</h2>

          <p className="slider-description"> {descprition}</p>

          <button
            onClick={() => sub(link)}
            className="link-slider"
            tabIndex="-1"
            type="button"
          >
            SHOP
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Home_Multiple_Slider);
