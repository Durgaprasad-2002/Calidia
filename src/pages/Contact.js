import React, { useState, useEffect } from "react";
import "./index.css";

import NavbarApp from "./Components/Navbar1";
import Footer from "./Components/Footer";

import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Contact() {
  // varibales and State hooks
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    msg: "",
  });

  // Handle Form Change
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://staar-s6o4.onrender.com/postContact", { User: formData })
      .then(() => {
        toast.success(t("toast_t3"));
      })
      .catch((err) => {
        toast.error(t("toast_t4"));
        console.error("Error:", err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarApp home={false} bg={false} cartpos={false} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <br />
      <br />
      <div className="outer-contact">
        <div className="container" id="content">
          <div className="row">
            <div className="col-md-6" id="contact-img">
              <div className="Address-holders">
                <div className="address">
                  <h4>
                    <CiLocationOn className="contact-icon" />
                    {t("contact_t2")}
                  </h4>
                  <address>
                    {t("contact_t3")}
                    <br /> {t("contact_t4")}
                  </address>
                </div>
                <div className="address">
                  <h4>
                    <CiPhone className="contact-icon" />
                    {t("contact_t5")}
                  </h4>
                  <address>
                    {" "}
                    <img
                      className="flag"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                      alt="india"
                    />{" "}
                    +91 9841555290
                    <br />
                    <img
                      className="flag"
                      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
                      alt="ireland"
                    />{" "}
                    +353 894310610
                  </address>
                </div>
                <div className="address">
                  <h4>
                    <CiMail className="contact-icon" />
                    {t("contact_t6")}
                  </h4>
                  <address>contact.info@calidia.ie</address>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="input-head">{t("contact_t12")}</h3>
              <form onSubmit={handleSubmit}>
                <div className="Input-Holders">
                  {[
                    {
                      label: t("contact_t7"),
                      name: "firstName",
                      type: "text",
                      placeholder: "First Name",
                    },
                    {
                      label: t("contact_t7"),
                      name: "lastName",
                      type: "text",
                      placeholder: "Last Name",
                    },
                    {
                      label: t("contact_t8"),
                      name: "email",
                      type: "email",
                      placeholder: "example@gmail.com",
                    },
                    {
                      label: t("contact_t9"),
                      name: "phoneNo",
                      type: "phone",
                      placeholder: "+1 8000 00000",
                    },
                    {
                      label: t("contact_t10"),
                      name: "msg",
                      type: "textarea",
                      placeholder: "Write Your Message",
                    },
                  ].map((input, index) => (
                    <div key={index} className="input-group">
                      {/* <label className="input-field-label">
                        {input.label}
                        <sup>*</sup>
                      </label> */}
                      <div className="input-field-outer">
                        {input.type === "textarea" ? (
                          <textarea
                            className="input-field"
                            placeholder={input.placeholder}
                            name={input.name}
                            onChange={handleForm}
                            cols={4}
                            required
                          />
                        ) : (
                          <input
                            type={input.type}
                            className="input-field"
                            placeholder={input.placeholder}
                            name={input.name}
                            onChange={handleForm}
                            required
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="input-field-outer">
                    <button type="submit" className="contact-button1">
                      {t("contact_t11")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
