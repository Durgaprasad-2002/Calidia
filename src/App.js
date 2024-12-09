import React, { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18next from "./i18n";
import Loader from "./pages/Loader";
import LocaleContext from "./LocaleContext";

const Home = lazy(() => import("./pages/Home.js"));
const Quote = lazy(() => import("./pages/Quote.js"));
const Cart = lazy(() => import("./pages/Cart.js"));
const Why = lazy(() => import("./pages/Why.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const About = lazy(() => import("./pages/About.js"));

function App() {
  return (
    <LocaleContext.Provider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/why" element={<Why />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
