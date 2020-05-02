import React from "react";
import { Layout } from "./components/Layout";
// import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <span>Counter Example</span>
        </div>
      </Layout>
    </div>
  );
}

export default App;
