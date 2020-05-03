import React from "react";
import { Link } from "react-router-dom";
import "./counter.css";

export const CounterPage = (props) => {
  return (
    <div>
      Counter <Link to={"/"}>Home</Link>
    </div>
  );
};
