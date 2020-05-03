import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import routes from "./routes/routes.json";
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

function HomePage(props) {
  return (
    <div>
      Home page
      <Link to={"/counter"}>Counter</Link>
    </div>
  );
}

function CounterPage(props) {
  return (
    <div>
      Counter <Link to={"/"}>Home</Link>
    </div>
  );
}

export default App;
