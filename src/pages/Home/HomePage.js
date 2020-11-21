import React, { useState, useEffect } from "react";
import DigitCanvas from "../../components/Canvas";
import DigitCard from "../../components/DigitCard";
import * as tf from "@tensorflow/tfjs";
import "./home.css";

const HomePage = (props) => {
  const [mnistModel, setMnistModel] = useState(null);

  const predictDigit = async (data) => {
    // const predictedDigit = await mnistModel.predict(data).data();
    // console.log("Predicted Digit: ", predictDigit);
  };

  useEffect(() => {
    async function loadModel() {
      const model = await tf.loadLayersModel("/models/mnist-tf-js-model.json");
      setMnistModel(model);
    }
    // loadModel();
  }, []);

  return (
    <div className="home-container">
      <div className="inner-container">
        <div style={{ width: "50%", minWidth: "300px" }}>
          <DigitCanvas predictDigit={predictDigit} />
        </div>
        <div style={{ width: "50%", minWidth: "300px" }}>
          <DigitCard digit={5} />{" "}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
