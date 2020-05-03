import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./layout.css";

const Layout = ({ children }) => (
  <div className="layout-container">
    <Header />
    <div className="layout-content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
