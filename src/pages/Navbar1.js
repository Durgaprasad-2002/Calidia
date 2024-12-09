// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import { Link, useLocation } from "react-router-dom";
// import Logo from "../Images/calidia.png";
// import { FaCartShopping } from "react-icons/fa6";
// import { IoIosArrowRoundUp } from "react-icons/io";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { useSelector } from "react-redux";
// import { useTranslation } from "react-i18next";

// function NavbarApp({ bg: propBg, home, cartpos, navscroll, showBG }) {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const cartItems = useSelector((state) => state.cart.value);

//   const [bg, setBg] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   // Update background and scroll-to-top visibility based on scroll position
//   const handleScroll = useCallback(() => {
//     const scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     setBg(scrollTop > 20);
//     setShowScrollTop(scrollTop > 200);
//   }, []);

//   useEffect(() => {
//     if (!home) {
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, [home, handleScroll]);

//   const styles = useMemo(() => {
//     const baseStyle = {
//       background:
//         !bg && propBg
//           ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))"
//           : "#262626",
//     };
//     if (!showBG) {
//       baseStyle.boxShadow =
//         !bg && propBg ? "0px 0px 0px 0px black" : "0px 0px 5px 0px black";
//     }
//     return baseStyle;
//   }, [bg, propBg, showBG]);

//   const navItems = [
//     { path: "/", label: t("footer_t5") },
//     { path: "/quote", label: t("card2_t4") },
//     { path: "/aboutus", label: t("navbar_t3") },
//     { path: "/why", label: t("navbar_t4") },
//     { path: "/contactus", label: t("footer_t7") },
//   ];

//   return (
//     <>
//       {/* WhatsApp Floating Icon */}
//       <div className="WHATASPP">
//         <a
//           href="https://wa.me/+353894310610?text=Hello"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <IoLogoWhatsapp className="whatapp-icon" />
//         </a>
//       </div>

//       {/* Navbar */}
//       <Navbar expand="lg" className="mb-3 top fixed-top" style={styles}>
//         <Container fluid>
//           {/* Logo */}
//           <Navbar.Brand className="title">
//             <Link to="/" className="logo-outer">
//               <img src={Logo} className="logo" alt="Logo" />
//             </Link>
//             <div className="text-middle">
//               <h2>
//                 <i>{t("footer_t1")}</i>
//               </h2>
//               <span className="below-title">{t("navbar_t1")}</span>
//             </div>
//           </Navbar.Brand>

//           {/* Toggle Button */}
//           <Navbar.Toggle
//             aria-controls="offcanvasNavbar"
//             className="close"
//             style={{ border: "none" }}
//           >
//             <div className="outer">
//               <div className="inner" />
//               <div className="inner" />
//               <div className="inner" style={{ width: "17px" }} />
//             </div>
//           </Navbar.Toggle>

//           {/* Offcanvas Menu */}
//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//             style={{ background: "#262626" }}
//           >
//             <Offcanvas.Header closeButton className="close">
//               <Offcanvas.Title
//                 id="offcanvasNavbarLabel"
//                 style={{ color: "black" }}
//               >
//                 <i>{t("about_t5")}</i>
//                 <span
//                   style={{
//                     fontSize: "13px",
//                     color: "orange",
//                     marginLeft: "3px",
//                   }}
//                 >
//                   {t("navbar_t2")}
//                 </span>
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 {navItems.map(({ path, label }) => (
//                   <li
//                     key={path}
//                     className={`outer-li ${
//                       location.pathname === path ? "active" : ""
//                     }`}
//                   >
//                     <Link
//                       to={path}
//                       className="nav-item"
//                       style={{ textDecoration: "none" }}
//                     >
//                       <span
//                         style={{
//                           color: location.pathname === path ? "white" : "",
//                         }}
//                       >
//                         {label}
//                       </span>
//                     </Link>
//                     <br />
//                   </li>
//                 ))}
//                 {cartpos && (
//                   <li className="outer-li">
//                     <Link
//                       to="/cart"
//                       className="nav-item"
//                       style={{ textDecoration: "none" }}
//                     >
//                       <FaCartShopping className="cart-icon" />
//                       {cartItems.length > 0 && (
//                         <sup className="cart-icon-sup">{cartItems.length}</sup>
//                       )}
//                     </Link>
//                   </li>
//                 )}
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>

//       {/* Scroll-to-top Button */}
//       {showScrollTop && (
//         <button
//           className="btn-7"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <IoIosArrowRoundUp className="top-icon" />
//         </button>
//       )}
//     </>
//   );
// }

// export default NavbarApp;

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Images/calidia.png";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { IoLogoWhatsapp } from "react-icons/io";

function NavbarApp({ bg: propBg, home, cartpos, navscroll, showBG }) {
  const { t } = useTranslation();
  const location = useLocation();
  const [path, setPath] = useState("/");
  const cartItems = useSelector((state) => state.cart.value);
  const [bg, setBg] = useState(false);
  const [togShow, setTogShow] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const styles = useMemo(() => {
    let style = {
      background:
        !bg && propBg
          ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))"
          : "#262626",
    };

    if (!showBG) {
      style.boxShadow =
        !bg && propBg ? "0px 0px 0px 0px black" : "0px 0px 5px 0px black";
    }

    return style;
  }, [bg, propBg, showBG]);

  useEffect(() => {
    setBg(navscroll > 20);
    setTogShow(navscroll > 200);
  }, [navscroll]);

  const handleScroll = useCallback(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setTogShow(scrollTop > 200);
    setBg(scrollTop > 20);
  }, []);

  useEffect(() => {
    if (!home) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [home, handleScroll]);

  const navItems = [
    { path: "/", label: t("footer_t5") },
    { path: "/quote", label: t("card2_t4") },
    { path: "/aboutus", label: t("navbar_t3") },
    { path: "/why", label: t("navbar_t4") },
    { path: "/contactus", label: t("footer_t7") },
  ];

  return (
    <>
      <div className="WHATASPP">
        <a
          href="https://wa.me/+353894310610?text=Hello"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp className="whatapp-icon" />
        </a>
        <div className="support show">24/7 Support</div>
      </div>

      <Navbar
        key="lg"
        expand="lg"
        className="mb-3 top fixed-top"
        style={styles}
      >
        <Container fluid>
          <Navbar.Brand className="title">
            <div className="logo-outer">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="LogoImg">
                  <img src={Logo} className="logo" alt="Logo" />
                </div>
              </Link>
            </div>
            <div className="text-middle">
              <h2>
                <i>{t("footer_t1")}</i>
              </h2>
              <span className="below-title">{t("navbar_t1")}</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-lg"
            className="close"
            style={{ border: "none" }}
          >
            <div className="outer">
              <div className="inner"></div>
              <div className="inner"></div>
              <div className="inner" style={{ width: "17px" }}></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            style={{ background: "#262626" }}
          >
            <Offcanvas.Header closeButton className="close">
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                style={{ color: "black" }}
              >
                <i>{t("about_t5")}</i>
                <span
                  style={{
                    fontSize: "13px",
                    color: "orange",
                    marginLeft: "3px",
                  }}
                >
                  {t("navbar_t2")}
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navItems.map(({ path: navPath, label }) => (
                  <li
                    key={navPath}
                    className={`outer-li ${path === navPath ? "active" : ""}`}
                  >
                    <Link to={navPath} style={{ textDecoration: "none" }}>
                      <li
                        className="nav-item"
                        style={{ color: path === navPath ? "white" : "" }}
                      >
                        {label}
                      </li>
                    </Link>
                  </li>
                ))}
                {cartpos && (
                  <li className="outer-li">
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <li style={{ color: path === "/cart" ? "white" : "" }}>
                        <FaCartShopping className="cart-icon" />
                        <b>
                          <sup className="cart-icon-sup">
                            {cartItems.length !== 0 && cartItems.length}
                          </sup>
                        </b>
                      </li>
                    </Link>
                  </li>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <button
        className="btn-7"
        onClick={() => (document.documentElement.scrollTop = 0)}
        style={{
          transition: "display 0.3s ease",
          display: togShow ? "block" : "none",
        }}
      >
        <IoIosArrowRoundUp className="top-icon" />
      </button>
    </>
  );
}

export default NavbarApp;
