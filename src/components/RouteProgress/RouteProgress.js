import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "./route-progress.css";

export const RouteProgress = (props) => {
  nprogress.start();

  useEffect(() => {
    nprogress.done();
  }, []);

  return <Route {...props} />;
};
