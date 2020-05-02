import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";
import routes from "./routes/routes.json";
import "./App.css";

function App() {
  return (
    <div>
      <Layout>
        <div className="main-content">
          <BrowserRouter>
            <Switch>
              <Route exact path={routes.HOME} component={HomePage} />
              <Route exact path={routes.COUNTER} component={CounterPage} />
            </Switch>
          </BrowserRouter>
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
  return <div>Counter</div>;
}

export default App;
