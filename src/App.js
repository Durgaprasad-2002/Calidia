import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18next from "./i18n";
import LocaleContext from "./LocaleContext";

import Loader from "./pages/Components/Loader";
import NotFoundPage from "./pages/Components/RouteNotFound.js";

const Home = lazy(() => import("./pages/Home.js"));
const Quote = lazy(() => import("./pages/Quote.js"));
const Why = lazy(() => import("./pages/Why.js"));
const Contact = lazy(() => import("./pages/Contact.js"));
const About = lazy(() => import("./pages/About.js"));

function App() {
  return (
    <LocaleContext.Provider value={LocaleContext}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/why" element={<Why />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
