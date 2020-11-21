import React from "react";
import "./digitcard.css";

const DigitCard = (props) => {
  const { digit } = props;
  return (
    <div className="digit-container-styles">
      <div className="digit-card-styles">
        <div className="digit-inner-container">
          <span className="font-styles">{digit}</span>
        </div>
      </div>
    </div>
  );
};

export default DigitCard;
