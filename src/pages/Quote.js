import React, { useState, useEffect } from "react";
import "./index.css";

import NavbarApp from "./Components/Navbar1";
import Footer from "./Components/Footer";
import products from "../assets/data";

import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

import { IoLogoWhatsapp } from "react-icons/io";

import NotFound from "../Images/notfound.jpg";
import LoadingImg from "../Images/loading.webp";

const CategoryList = ({ categorynum, handleCategory }) => {
  const { t } = useTranslation();
  const categories = ["rice", "Pulses", "Flours", "Vegetables", "Fruits"];

  return (
    <div className="col-md-2 cat-con">
      <div className="row" id="sticky-pos">
        <div className="category">
          <h4 className="category-title">{t("quote_t2")} </h4>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className="quote-categorie"
                style={{
                  borderColor: categorynum === cat ? "#386909" : "darkgrey",
                  color: categorynum === cat ? "white" : "darkgrey",
                  background: categorynum === cat ? "#386909" : "none",
                }}
                onClick={() => handleCategory(cat)}
              >
                <span>{categorynum === cat ? "×" : "+"}</span>{" "}
                {t(`card2_t${categories.indexOf(cat) + 10}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className="product-item">
      <span className="cat-name">{data.category}</span>
      <img
        className="product-img"
        src={data.img}
        alt={data.productName}
        onError={(e) => {
          e.currentTarget.src = NotFound;
        }}
      />
      <h4 className="product-name">{t(`p-${Number(data.id) + 1}`)}</h4>
      <div className="buttons-container-quote">
        <a
          className="button-quote-1"
          href="tel:+353894310610"
          target="_blank"
          rel="noreferrer"
        >
          Call Now
        </a>
        <a
          href={`https://wa.me/+353894310610?text=Hello,\n I want to know Quote on this '${t(
            `p-${Number(data.id) + 1}`
          )}'`}
          target="_blank"
          rel="noreferrer"
          className="button-quote-2"
        >
          <IoLogoWhatsapp className="quote-whatapp" />
          Get Quote
        </a>
      </div>
    </div>
  );
};

const Pagination = ({ totalItems, itemsPerPage, currentPage, setPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <nav className="PageNavigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`page-item ${currentPage === num ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => setPage(num)}>
              {num}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default function Quote() {
  const { t } = useTranslation();
  const location = useLocation();
  const [items, setItems] = useState(products.products);
  const [categorynum, setCategorynum] = useState("none");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filterProducts = (category) => {
    const filteredProducts = products.products.filter(
      (product) => product.category === category
    );
    setItems(() => filteredProducts);
    document.documentElement.scrollTop = 0;
  };

  const handleCategory = (category) => {
    if (categorynum === category) {
      setCategorynum("none");
      setItems(products.products);
      setCurrentPage(() => 1);
    } else {
      setCategorynum(category);
      filterProducts(category);
    }
  };

  useEffect(() => {
    if (location?.state) {
      setCategorynum(location.state);
      filterProducts(location.state);
    }
    document.documentElement.scrollTop = 0;
  }, [location]);

  // Pagination Logic

  let indexOfLastItem = currentPage * itemsPerPage;
  let indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    indexOfLastItem = currentPage * itemsPerPage;
    indexOfFirstItem = indexOfLastItem - itemsPerPage;
    currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentPage(1);
  }, [items]);

  return (
    <>
      <NavbarApp bg={false} home={false} cartpos={true} />
      <br />
      <br />
      <div className="quote-outer">
        <br />
        <ToastContainer
          className="Toast-own"
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container-fluid">
          <div className="row">
            <h1 className="head-category">{t("quote_t1")}</h1>
          </div>
          <div className="row">
            <CategoryList
              categorynum={categorynum}
              handleCategory={handleCategory}
            />
            <div className="col-md-10">
              <div className="items-container">
                {currentItems.length > 0 ? (
                  currentItems.map((data, key) => (
                    <ProductItem key={data.id} data={data} index={key} />
                  ))
                ) : (
                  <div
                    className="d-flex align-items-center w-50"
                    style={{ width: "100%", height: "70vh" }}
                  >
                    <div
                      className="spinner-border ms-auto"
                      aria-hidden="true"
                    ></div>
                  </div>
                )}
              </div>
              <Pagination
                totalItems={items.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
