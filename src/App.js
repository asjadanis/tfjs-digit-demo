import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import routes from "./routes/routes.json";
import { HomePage } from "./pages/Home";
import { CounterPage } from "./pages/Counter";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <div className="main-content">
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.COUNTER} component={CounterPage} />
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
