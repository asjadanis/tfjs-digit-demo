import React, { useRef, useEffect, useState } from "react";
import DigitCanvas from "../../components/Canvas"
import DigitCard from "../../components/DigitCard";
import "./home.css";

const HomePage = (props) => {

  return (
    <div className="home-container">
      <div style={{display: "flex", height: "100%", alignItems:"center"}}>
        <div style={{width:"50%"}}><DigitCanvas /></div>
        <div style={{width:"50%"}}><DigitCard digit={5}/> </div>
      </div>
    </div>
  );
};

export default HomePage;
