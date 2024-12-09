import React, { useState, useEffect, useRef, lazy } from "react";
import "./index.css";
import NavbarApp from "./Navbar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { debounce } from "lodash";

import Img1 from "../Images/Scroll-images/sc1.webp";
import Img2 from "../Images/Scroll-images/sc2.webp";
import Img3 from "../Images/Scroll-images/sc3.webp";
import Img4 from "../Images/Scroll-images/sc4.webp";
import Img5 from "../Images/Scroll-images/sc5.webp";
import Img6 from "../Images/Scroll-images/sc6.webp";
import Img7 from "../Images/Scroll-images/sc7.webp";

const Features_card = lazy(() => import("./Features_card.js"));
const CarouselHome = lazy(() => import("./CarouselHome.js"));
const Card2 = lazy(() => import("./Card2.js"));

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
];

const Home = () => {
  const { t } = useTranslation();
  const [navScroll, setNavScroll] = useState(0);
  const [display, setDisplay] = useState("block");
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setDisplay(scrollTop > 60 ? "none" : "block");
      setNavScroll(scrollTop);

      if (scrollRef.current) {
        for (let i = 0; i < scrollRef.current.children.length; i++) {
          scrollRef.current.children[
            i
          ].style.transform = `translateX(${-scrollTop}px)`;
        }
      }
    }, 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [locale, setLocale] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChanged = (lng) => setLocale(lng);
    i18next.on("languageChanged", handleLanguageChanged);

    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <>
      <NavbarApp cartpos={false} bg={true} home={true} navscroll={navScroll} />

      <CarouselHome />
      <div className="Locale-changer" style={{ display }}>
        <select value={locale} onChange={handleChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="nl">Dutch</option>
          <option value="ger">German</option>
          <option value="es">Spanish</option>
          <option value="it">Italian</option>
          <option value="ru">Russian</option>
        </select>
      </div>
      <div className="bg-grad">
        <div className="container-fluid">
          <div className="row desc-1">
            <div className="col-md-12">
              <h6 className="desc-1-tagline">CaliDia Foods</h6>
              <h1 className="desc-1-heading">
                {t("home_t1")}
                <br />
                {t("home_t2")}
              </h1>
            </div>
            <div className="col-md-12">
              <p className="desc-1-para">
                {t("home_t3")} <b>{t("home_t4")}</b>, {t("home_t5")}
              </p>
              <Link to="/aboutus">
                <button className="btn-1">{t("home_t6")}</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="overflow-outer">
          <div className="topp"></div>
          <div ref={scrollRef} className="srcoll-1">
            {images.map((img, index) => (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                key={index}
                src={img}
                alt={`scroll-image-${index}`}
                className="srcoll-img"
              />
            ))}
          </div>
          <div className="bottomp"></div>
        </div>

        {/* <Card1 /> */}
        <Features_card />
      </div>
      <Card2 />
      <div className="above-footer">
        <div className="inner-above-footer">
          <h1>{t("home_t7")}</h1>
          <p>{t("home_t8")}</p>
          <div className="btn-container">
            <Link to="/contactus">
              <button className="btn-3">{t("home_t9")}</button>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
