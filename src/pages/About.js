import React, { useEffect, useState } from "react";
import "./index.css";
import NavbarApp from "./Navbar1";
import Footer from "./Footer";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { InView, useInView } from "react-intersection-observer";
import "animate.css";

export default function About() {
  const { t } = useTranslation();

  const [ref2, view2] = useInView({
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  let [counts, setCounts] = useState({
    countries: 10,
    quality: 95,
    sold: 0,
  });

  function IncrementCounter(countriesTarget, qualityTarget, soldTarget) {
    const totalSteps = soldTarget;

    let stepsCompleted = 0;

    const interval = setInterval(() => {
      setCounts((prevCounts) => {
        const newCounts = { ...prevCounts };

        if (stepsCompleted < totalSteps) {
          newCounts.sold = stepsCompleted + 1;
        }

        stepsCompleted += 1;

        if (stepsCompleted >= totalSteps) {
          clearInterval(interval);
        }

        return newCounts;
      });
    }, 3000 / totalSteps);
  }

  useEffect(() => {
    if (view2) {
      IncrementCounter(10, 95, 4000);
    }
  }, [view2]);

  return (
    <>
      <NavbarApp bg={true} home={false} cartpos={false} />
      <div className="about-outer">
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
        <div className="Owner-info-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="Img-conatiner">
                  <img
                    className="about-owner-img"
                    src="https://media.gettyimages.com/id/525489485/photo/brown-basmati-rice.jpg?s=612x612&w=0&k=20&c=-ZUiqQ2oSnqXMibMuaiIMlhu75j_bKdC1vVAa8ZIsJ8="
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
                  {/* It is pertinent to note that our company holds all the
                  necessary certifications and memberships mandated by Indian
                  regulatory authorities. This comprehensive commitment to
                  compliance and quality assurance further solidifies our
                  standing as a reliable and esteemed participant in the
                  international export arena. */}
                  {t("about_t8")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-redirect">
          <div className="Redirect-info">
            <h2>{t("about_t5")}</h2>
            <p className="about-red-para">
              {/* Bringing Nature's Best to Your Table, Across Continents */}
              {t("about_t9")}
            </p>
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
