import React, { useEffect, useState } from "react";
import "./index.css";

import NavbarApp from "./Components/Navbar1";
import Footer from "./Components/Footer";

import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useInView } from "react-intersection-observer";
import "animate.css";

import aboutImg from "../Images/about.jpg";

function About() {
  // variables and state hooks
  const { t } = useTranslation();
  let [counts, setCounts] = useState({
    countries: 10,
    quality: 95,
    sold: 4000,
  });
  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // function IncrementCounter(countriesTarget, qualityTarget, soldTarget) {
  //   const totalSteps = soldTarget;
  //   let stepsCompleted = 0;
  //   const interval = setInterval(() => {
  //     setCounts((prevCounts) => {
  //       const newCounts = { ...prevCounts };
  //       if (stepsCompleted < totalSteps) newCounts.sold = stepsCompleted + 1;
  //       stepsCompleted += 1;
  //       if (stepsCompleted >= totalSteps) clearInterval(interval);
  //       return newCounts;
  //     });
  //   }, 3000 / totalSteps);
  // }

  // useEffect(() => {
  //   if (view2) IncrementCounter(10, 95, 4000);
  // }, [view2]);

  return (
    <>
      <NavbarApp bg={true} home={false} cartpos={false} />
      <div className="about-outer">
        {/* Header for About */}
        <div className="outer-Bg-About">
          <div className="inner-outer-Bg-About">
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <h1 className="about-head">{t("about_t1")}</h1> */}
            <div className="about-intro">
              <h1>{t("about_t2")}</h1>
              <p>{t("about_t3")}</p>
              <p> {t("about_t4")}</p>
              <br />
            </div>
          </div>
        </div>
        {/* Counters of Org */}
        <div className="outer-bottom-title">
          <div
            ref={ref2}
            className={`bottom-title content-section ${
              view2 ? `animate__animated animate__slideInRight content-vis` : ""
            }`}
          >
            <div className="Counters">
              <div className="count">
                <h3>
                  {counts.countries}
                  <sup>+</sup>
                </h3>
                <p>{t("gallery_t3")}</p>
              </div>
              <div className="count">
                <h3>{counts.quality}%</h3>
                <p>{t("gallery_t4")}</p>
              </div>
              <div className="count">
                <h3>
                  {counts.sold}
                  <sup>+</sup>
                </h3>
                <p>{t("gallery_t5")}</p>
              </div>
            </div>
          </div>
        </div>
        {/* About Desciption */}
        <div className="Owner-info-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="Img-conatiner">
                  <img
                    className="about-owner-img"
                    src={aboutImg}
                    alt="Rice-bag-img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3>
                  <i>{t("about_t5")}</i>
                  <span style={{ fontSize: "11px" }}> {t("about_t6")}</span>
                </h3>
                <br />
                <p>
                  {t("about_t7")} <br />
                  <br />
                  {t("about_t8")}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Quote Redirect Info */}
        <div className="outer-redirect">
          <div className="Redirect-info">
            <h2>{t("about_t5")}</h2>
            <p className="about-red-para">{t("about_t9")}</p>
            <Link to="/quote" style={{ textDecoration: "none" }}>
              <button className="about-btn">
                {t("about_t10")}{" "}
                <IoMdArrowDropright className="about-red-icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
