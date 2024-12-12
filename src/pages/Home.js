import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import "./index.css";

import NavbarApp from "./Components/Navbar1";
import Footer from "./Components/Footer";
import Loading from "./Components/Loader.js";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Img1 from "../Images/Scroll-images/sc1.webp";
import Img2 from "../Images/Scroll-images/sc2.webp";
import Img3 from "../Images/Scroll-images/sc3.webp";
import Img4 from "../Images/Scroll-images/sc4.webp";
import Img5 from "../Images/Scroll-images/sc5.webp";
import Img6 from "../Images/Scroll-images/sc6.webp";
import Img7 from "../Images/Scroll-images/sc7.webp";

const CarouselHome = lazy(() => import("./Components/CarouselHome.js"));
const FeaturesCard = lazy(() => import("./Components/Features_card.js"));
const Card2 = lazy(() => import("./Components/ProductsInfoHome.js"));

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
  //state and variables
  const { t } = useTranslation();
  const [locale, setLocale] = useState(i18next.language);
  const [navScroll, setNavScroll] = useState(0);
  const [display, setDisplay] = useState("block");
  const scrollRef = useRef(null);
  const [isHome, setIsHome] = useState(true);

  //handling Scrolling Effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 991) {
        setIsHome(() => false);
        return;
      }
      setIsHome(() => true);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setDisplay(scrollTop > 60 ? "none" : "block");
      setNavScroll(scrollTop);

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(${-scrollTop}px)`;
      }
      // if (scrollRef.current) {
      //   for (let i = 0; i < scrollRef.current.children.length; i++) {
      //     scrollRef.current.children[
      //       i
      //     ].style.transform = `translateX(${-scrollTop}px)`;
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //handling the language change
  useEffect(() => {
    const handleLanguageChanged = (lng) => setLocale(lng);
    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  //handle the input field of language
  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <>
      {/* Internationalization Buttom */}
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

      {/* Navbar */}
      <NavbarApp
        cartpos={false}
        bg={true}
        home={isHome}
        navscroll={navScroll}
      />

      {/* Carousel Container */}
      <Suspense fallback={<Loading />}>
        <CarouselHome />
      </Suspense>

      {/* Header Home */}
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

        {/* Scrolling Component */}
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

        {/* Commitments Components */}
        <Suspense fallback={<Loading />}>
          <FeaturesCard />
        </Suspense>
      </div>

      {/* Products Info component */}
      <Suspense fallback={<Loading />}>
        <Card2 />
      </Suspense>

      {/* Contact Footer */}
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
