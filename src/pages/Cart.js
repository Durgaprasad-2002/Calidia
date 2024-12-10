import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import NavbarApp from "./Navbar1";
import Footer from "./Footer";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateCount, clearCart } from "../Slices/Carts/Cart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function Cart() {
  const { t } = useTranslation();
  const cartItems = useSelector((state) => state.cart.value);
  const weight = useSelector((state) => state.cart.totalWeight);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const handleForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://staar-s6o4.onrender.com/postCart", {
        Items: cartItems,
        User: formData,
      });
      toast(t("toast_t1"));
      dispatch(clearCart());
    } catch (err) {
      toast(t("toast_t2"));
      console.error("Error submitting cart:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCounting = (key, increment) => {
    dispatch(updateCount({ key, count: increment }));
  };

  return (
    <>
      <NavbarApp home={false} bg={false} cartpos={true} />
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
      <div className="cart-outer">
        <div className="container-fluid">
          {cartItems.length > 0 && (
            <div className="title-cart" style={{ padding: "30px 0 20px 0" }}>
              <h4>{t("cart_t1")}</h4>
            </div>
          )}
          <div className="row">
            <div className="cart-container col-md-8">
              {cartItems.map((data, key) => (
                <div className="cart-item-outer" key={data.id}>
                  <div className="cart-item">
                    <img
                      src={data.productImg}
                      alt={data.productName}
                      className="cart-img"
                    />
                    <div className="outer-increm">
                      <h4 className="cart-pname">
                        {t(`p-${Number(data.id) + 1}`)}
                      </h4>
                      <div className="increments-holder">
                        <button
                          className="qa-icon"
                          onClick={() => handleCounting(key, false)}
                        >
                          <FaMinus />
                        </button>
                        <input
                          type="text"
                          className="quan-val"
                          value={data.quantity}
                          readOnly
                        />
                        <button
                          className="qa-icon"
                          onClick={() => handleCounting(key, true)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(data.productName))}
                  >
                    {t("cart_t2")}
                  </button>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              {cartItems.length > 0 && (
                <div className="Total-container">
                  <h3 className="title-order">Order Summary</h3>
                  {cartItems.map((ele) => (
                    <h6 className="check-out" key={ele.id}>
                      {t(`p-${ele.id + 1}`)}{" "}
                      <span className="items-count">{ele.quantity} kgs</span>
                    </h6>
                  ))}
                  <h5 className="total">
                    <strong>{t("cart_t3")}:</strong>{" "}
                    <span className="items-count">{weight} kgs</span>
                  </h5>
                  <h6 className="final-total">
                    <strong>{t("cart_t4")}:</strong>{" "}
                    <span className="items-count">
                      {cartItems.length} items
                    </span>
                  </h6>
                  <button
                    className="quote-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    {t("card2_t4")} <FaArrowRight className="right-arrow" />
                  </button>
                </div>
              )}
            </div>
          </div>
          {cartItems.length === 0 && (
            <div style={{ minHeight: "350px" }}>
              <div className="no-content"></div>
              <div className="no-content-desc">
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't made your choice yet...</p>
                <Link to="/quote">
                  <button type="button" className="btn btn-primary">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-dark text-light">
              <h5 class="modal-title " id="staticBackdropLabel">
                {t("cart_t5")}
              </h5>
              <button
                type="button"
                class="btn-close bg-light"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                class="row g-3 needs-validation"
                novalidate
                onSubmit={HandleSubmit}
              >
                <div class="col-md-12 position-relative">
                  <p className="modal-para">{t("cart_t6")}</p>
                </div>
                <div class="col-md-6 position-relative">
                  <div class="form-floating mb-12">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="XXXXX"
                      name="firstName"
                      onChange={handleForm}
                      required
                    />
                    <label for="floatingInput">{t("cart_t7")}</label>
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <div class="form-floating mb-12">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="XXXXX"
                      name="lastName"
                      onChange={handleForm}
                      required
                    />
                    <label for="floatingInput">{t("cart_t8")}</label>
                  </div>
                </div>

                <div class="col-md-6 position-relative">
                  <div class="form-floating mb-12">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="XXXXX"
                      name="email"
                      onChange={handleForm}
                      required
                    />
                    <label for="floatingInput">{t("cart_t9")}</label>
                  </div>
                </div>

                <div class="col-md-6 position-relative">
                  <div class="form-floating mb-12">
                    <input
                      type="phone"
                      class="form-control"
                      id="floatingInput"
                      placeholder="XXXXX"
                      name="phoneNo"
                      onChange={handleForm}
                      required
                    />
                    <label for="floatingInput">{t("cart_t10")}.</label>
                  </div>
                </div>

                <div class="col-md-12 position-relative">
                  <div class="form-floating mb-12">
                    <textarea
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="XXXXX"
                      name="address"
                      onChange={handleForm}
                      required
                    />
                    <label for="floatingInput">{t("cart_t11")}</label>
                  </div>
                </div>

                <div class="col-md-12 position-relative">
                  <br />

                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{ float: "right", marginRight: "5px" }}
                  >
                    {loading == false ? "Get Quote" : "Sending.."}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    style={{ float: "right", marginRight: "5px" }}
                  >
                    {t("cart_t12")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
