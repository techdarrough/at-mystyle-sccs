import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home"
import About from "./views/About"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './scss/style.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
