import React, { useEffect } from "react";
import "./index.css";

import NavbarApp from "./Navbar1";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import "animate.css";

export default function Why() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ref1, view1] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });
  return (
    <>
      <NavbarApp bg={false} home={false} cartpos={false} showBG={true} />
      <br />
      <br />
      <br />
      <br />

      <section className="why-box">
        <div
          ref={ref1}
          className={`img-cont content-section ${
            view1 ? `animate__animated animate__slideInDown content-vis` : ""
          }`}
        >
          <div className="over-title-why">
            <h2 className="">Why CaliDia </h2>
            <div className="square"></div>
          </div>

          <img
            src="https://img.freepik.com/free-photo/jasmine-rice_74190-7259.jpg"
            className="why-img"
            alt="A close-up of jasmine rice grains"
          />
        </div>
        <div className="info-container">
          <div className="extend"></div>
          <p>
            Our mission is to become the premier distributor of Indian food
            products in Ireland by offering superior products at the most
            affordable costs. With tight collaboration with our partners, we
            hope to become the go-to one-stop shop for merchants looking for
            Indian goods, offering exceptional customer service and an
            efficient supply chain.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
