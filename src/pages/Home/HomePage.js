import React, { useState, useEffect } from "react";
import DigitCanvas from "../../components/Canvas";
import DigitCard from "../../components/DigitCard";
import * as tf from "@tensorflow/tfjs";
import "./home.css";

const HomePage = (props) => {
  const [mnistModel, setMnistModel] = useState(null);
  const [predictedResult, setPredictedResult] = useState(null);

  const predictDigit = async (data) => {
    const predictedResult = await mnistModel.predict(data).data();
    const predictedDigit = predictedResult.indexOf(Math.max(...predictedResult));
    setPredictedResult(predictedDigit);
  };

  useEffect(() => {
    async function loadModel() {
      const model = await tf.loadLayersModel("http://127.0.0.1:8000/model.json");
      setMnistModel(model);
    }
    loadModel();
  }, []);

  return (
    <div className="home-container">
      <div className="inner-container">
        <div style={{ width: "50%", minWidth: "300px" }}>
          <DigitCanvas predictDigit={predictDigit} />
        </div>
        <div style={{ width: "50%", minWidth: "300px" }}>
          <DigitCard digit={predictedResult} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
