import React, { useRef, useEffect, useState } from "react";
import DigitCanvas from "../../components/Canvas"
import DigitCard from "../../components/DigitCard";
import "./home.css";

const HomePage = (props) => {

  return (
    <div className="home-container">
      <div className="inner-container">
        <div style={{width:"50%", minWidth: "300px"}}><DigitCanvas /></div>
        <div style={{width:"50%", minWidth: "300px"}}><DigitCard digit={5}/> </div>
      </div>
    </div>
  );
};

export default HomePage;
