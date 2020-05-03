import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureStore(initialState = {}) {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  } else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    );
  }
}
