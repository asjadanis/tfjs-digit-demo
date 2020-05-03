import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counter from "./Counter";

const rootReducer = (history) =>
  combineReducers({
    counter,
    router: connectRouter(history),
  });

export default rootReducer;
