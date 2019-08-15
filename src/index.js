import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { Provider } from "react-redux";
import createMiddleware from "redux-saga";

import configureStore from "./store"; // eslint-disable-line import/default
import reducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createMiddleware();
const store = configureStore(reducer, sagaMiddleware);
sagaMiddleware.run(sagas);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("app-root"));
