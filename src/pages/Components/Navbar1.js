import React, { useEffect, useState, useMemo, useCallback } from "react";

import "../index.css";

// Bootstarp Components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.css";

import Logo from "../../Images/calidia.webp";

import { IoIosArrowUp, IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

function NavbarApp({ bg: propBg, home, cartpos, navscroll, showBG }) {
  //states
  const { t } = useTranslation();
  const location = useLocation();
  const [path, setPath] = useState("/");
  const [bg, setBg] = useState(false);
  const [togShow, setTogShow] = useState(false);

  //path setter
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  // styles for navbar background
  const styles = useMemo(() => {
    let style = {
      background:
        !bg && propBg
          ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))"
          : "#262626",
      transition: "background-color 0.3s ease", // Added transition for smooth background color change
    };

    if (!showBG) {
      style.boxShadow =
        !bg && propBg ? "0px 0px 0px 0px black" : "0px 0px 5px 0px black";
    }

    return style;
  }, [bg, propBg, showBG]);

  //background Handler
  useEffect(() => {
    setBg(navscroll > 20);
    setTogShow(navscroll > 200);
  }, [navscroll]);

  //position handler for bg and toggle btn
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

  const handleLinkClick = () => {
    setTogShow(false); // Close the navbar on mobile when a link is clicked
  };

  return (
    <>
      {/* ------------------------- */}
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
      <button
        className="btn-7"
        onClick={() => (document.documentElement.scrollTop = 0)}
        style={{
          transition: "display 0.3s ease",
          display: togShow ? "block" : "none",
        }}
      >
        <IoIosArrowUp className="top-icon" />
      </button>
      {/* ----------------- */}

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
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {navItems.map(({ path: navPath, label }) => (
                  <li
                    key={navPath}
                    className={`outer-li ${path === navPath ? "active" : ""}`}
                  >
                    <Link
                      to={navPath}
                      style={{ textDecoration: "none" }}
                      onClick={handleLinkClick}
                    >
                      <li
                        className="nav-item"
                        style={{ color: path === navPath ? "white" : "" }}
                      >
                        {label}
                      </li>
                    </Link>
                  </li>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default React.memo(NavbarApp);

// -------------------------------------------------------
// import React, { useEffect, useState, useMemo, useCallback } from "react";

// import "../index.css";

// // Bootstarp Components
// import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";

// import Logo from "../../Images/calidia.webp";

// import { IoIosArrowUp, IoLogoWhatsapp } from "react-icons/io";
// import { useTranslation } from "react-i18next";
// import { Link, useLocation } from "react-router-dom";

// function NavbarApp({ bg: propBg, home, cartpos, navscroll, showBG }) {
//   //states
//   const { t } = useTranslation();
//   const location = useLocation();
//   const [path, setPath] = useState("/");
//   const [bg, setBg] = useState(false);
//   const [togShow, setTogShow] = useState(false);

//   //path setter
//   useEffect(() => {
//     setPath(location.pathname);
//   }, [location]);

//   // styles for navbar background
//   const styles = useMemo(() => {
//     let style = {
//       background:
//         !bg && propBg
//           ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))"
//           : "#262626",
//     };

//     if (!showBG) {
//       style.boxShadow =
//         !bg && propBg ? "0px 0px 0px 0px black" : "0px 0px 5px 0px black";
//     }

//     return style;
//   }, [bg, propBg, showBG]);

//   //background Handler
//   useEffect(() => {
//     setBg(navscroll > 20);
//     setTogShow(navscroll > 200);
//   }, [navscroll]);

//   //position handler for bg and toggle btn
//   const handleScroll = useCallback(() => {
//     const scrollTop =
//       document.documentElement.scrollTop || document.body.scrollTop;
//     setTogShow(scrollTop > 200);
//     setBg(scrollTop > 20);
//   }, []);

//   useEffect(() => {
//     if (!home) {
//       window.addEventListener("scroll", handleScroll);
//       return () => window.removeEventListener("scroll", handleScroll);
//     }
//   }, [home, handleScroll]);

//   const navItems = [
//     { path: "/", label: t("footer_t5") },
//     { path: "/quote", label: t("card2_t4") },
//     { path: "/aboutus", label: t("navbar_t3") },
//     { path: "/why", label: t("navbar_t4") },
//     { path: "/contactus", label: t("footer_t7") },
//   ];

//   return (
//     <>
//       <div className="WHATASPP">
//         <a
//           href="https://wa.me/+353894310610?text=Hello"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <IoLogoWhatsapp className="whatapp-icon" />
//         </a>
//         <div className="support show">24/7 Support</div>
//       </div>

//       <Navbar
//         key="lg"
//         expand="lg"
//         className="mb-3 top fixed-top"
//         style={styles}
//       >
//         <Container fluid>
//           <Navbar.Brand className="title">
//             <div className="logo-outer">
//               <Link to="/" style={{ textDecoration: "none" }}>
//                 <div className="LogoImg">
//                   <img src={Logo} className="logo" alt="Logo" />
//                 </div>
//               </Link>
//             </div>
//             <div className="text-middle">
//               <h2>
//                 <i>{t("footer_t1")}</i>
//               </h2>
//               <span className="below-title">{t("navbar_t1")}</span>
//             </div>
//           </Navbar.Brand>

//           <Navbar.Toggle
//             aria-controls="offcanvasNavbar-expand-lg"
//             className="close"
//             style={{ border: "none" }}
//           >
//             <div className="outer">
//               <div className="inner"></div>
//               <div className="inner"></div>
//               <div className="inner" style={{ width: "17px" }}></div>
//             </div>
//           </Navbar.Toggle>
//           <Navbar.Offcanvas
//             id="offcanvasNavbar-expand-lg"
//             aria-labelledby="offcanvasNavbarLabel-expand-lg"
//             placement="end"
//             style={{ background: "#262626" }}
//           >
//             <Offcanvas.Header closeButton className="close">
//               <Offcanvas.Title
//                 id="offcanvasNavbarLabel-expand-lg"
//                 style={{ color: "black" }}
//               >
//                 <i>{t("about_t5")}</i>
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 {navItems.map(({ path: navPath, label }) => (
//                   <li
//                     key={navPath}
//                     className={`outer-li ${path === navPath ? "active" : ""}`}
//                   >
//                     <Link to={navPath} style={{ textDecoration: "none" }}>
//                       <li
//                         className="nav-item"
//                         style={{ color: path === navPath ? "white" : "" }}
//                       >
//                         {label}
//                       </li>
//                     </Link>
//                   </li>
//                 ))}
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//       <button
//         className="btn-7"
//         onClick={() => (document.documentElement.scrollTop = 0)}
//         style={{
//           transition: "display 0.3s ease",
//           display: togShow ? "block" : "none",
//         }}
//       >
//         <IoIosArrowUp className="top-icon" />
//       </button>
//     </>
//   );
// }

// export default React.memo(NavbarApp);
