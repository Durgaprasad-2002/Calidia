/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import "./index.css";
import NavbarApp from "./Navbar1";
import Footer from "./Footer";
import products from "./Products";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../Slices/Carts/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

import { IoLogoWhatsapp } from "react-icons/io";
import DummyImg from "../Images/Scroll-images/dummyImg.jpg";

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

const ProductItem = ({ data, index, handleCart }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-item">
      <span className="cat-name">{data.category}</span>
      <img
        className="product-img"
        src={data.img}
        alt={data.productName}
        onError={(e) => {
          e.target.src =
            "https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw";
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
      <div className="quantity-container">
        {/* <h4 className="quantity">{t("quote_t4")}</h4> */}
        {/* <div className="increments-holder">
          <button
            className="qa-icon"
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
          >
            <FaMinus />
          </button>
          <input
            readOnly
            type="number"
            className="quan-val"
            value={quantity}
            placeholder="0"
          />
          <button
            className="qa-icon"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <FaPlus />
          </button>
        </div> */}
      </div>
      {/* <button
        className="btn-8"
        onClick={() => {
          handleCart(data, quantity, data.id);
          setQuantity(0);
        }}
      >
        {t("quote_t5")}
      </button> */}
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
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleCart = (item, count, index) => {
    if (count > 0) {
      dispatch(
        addItem({
          productImg: item.img,
          productName: item.productName,
          quantity: count,
          id: index,
        })
      );
      toast(`${item.productName} ${t("toast_t5")}`);
    } else {
      toast(t("toast_t6"));
    }
  };

  const filterProducts = (category) => {
    const filteredProducts = products.products.filter(
      (product) => product.category === category
    );
    setItems(filteredProducts);
    document.documentElement.scrollTop = 0;
  };

  const handleCategory = (category) => {
    if (categorynum === category) {
      setCategorynum("none");
      setItems(products.products);
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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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
          hideProgressBar={false}
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
                    <ProductItem
                      key={data.id}
                      data={data}
                      index={key}
                      handleCart={handleCart}
                    />
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
