import React from "react";
import { Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import routes from "./routes/routes.js";
import "./App.css";
import { RouteProgress } from "./components/RouteProgress/RouteProgress";

function App() {
  return (
    <div>
      <Layout>
        <div className="main-content">
          <Switch>
            {routes.map((route, index) => (
              <RouteProgress key={index} {...route} />
            ))}
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
