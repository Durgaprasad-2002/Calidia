import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="not-found-link">
        Go Back Home
      </Link>
    </div>
  );
}
