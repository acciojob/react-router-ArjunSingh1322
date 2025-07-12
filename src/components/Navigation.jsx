// Navigation.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      {/* Cypress requires <a href> for static selector */}
      {/* <a href="/">Home</a>{" | "}
      <a href="/about">About</a> */}

      <br /><br />

      {/* Optional: programmatic routing */}
      <button onClick={() => navigate("/")}>Go Home (JS)</button>
      <button onClick={() => navigate("/about")}>Go About (JS)</button>
    </nav>
  );
};

export default Navigation;
