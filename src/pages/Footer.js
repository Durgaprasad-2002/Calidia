import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Footer(props) {
  const { t } = useTranslation();
  return (
    <>
      <div class="footer">
        <div className="contacts">
          <div className="items">
            <br />
            <h4 className="footer-heading">
              <Link style={{ textDecoration: "none", color: "#386909" }} to="/">
                <i>{t("footer_t1")}</i> <span>{t("footer_t2")}</span>
              </Link>
            </h4>
            <p className="footer-para">{t("footer_t3")}</p>
            <div className="footer-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedin className="icon" />
            </div>
          </div>
          <div className="items col-item">
            <br />
            <h4 className="col-item-head">{t("footer_t4")}</h4>
            <ul>
              <li>
                {" "}
                <Link style={{ textDecoration: "none", color: "none" }} to="/">
                  {t("footer_t5")}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "none" }}
                  to="/aboutus"
                >
                  {t("footer_t6")}
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "none" }}
                  to="/quote"
                >
                  {t("card2_t4")}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "none" }}
                  to="/contactus"
                >
                  {t("footer_t7")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="items col-item">
            <br />
            <h4 className="col-item-head">Help</h4>
            <ul>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "none" }}
                  to="/quote"
                >
                  {t("footer_t8")}
                </Link>
              </li>

              <li>
                <a href="mailto:contact.info@calidia.ie">{t("footer_t9")}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy-rights">
          <div className="cpy-1">
            <a href="tel:9515066474">Designed & Developed by The W3b Dev's👨🏻‍💻</a>
          </div>
          <div className="cpy-2">{t("footer_t10")}</div>
        </div>
      </div>
    </>
  );
}
