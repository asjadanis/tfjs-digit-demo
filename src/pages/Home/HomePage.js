import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const HomePage = (props) => {
  return (
    <div>
      Home page
      <Link to={"/counter"}>Counter</Link>
    </div>
  );
};
