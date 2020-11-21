import React, { useRef, useEffect, useState } from "react";
import DigitCanvas from "../../components/Canvas"
import "./home.css";

const HomePage = (props) => {

  return (
    <div>
      Tensorflow JS Digit Demo
      <DigitCanvas />
    </div>
  );
};

export default HomePage;
