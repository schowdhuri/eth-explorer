import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";

import { Provider } from "react-redux";
import createMiddleware from "redux-saga";

import configureStore from "./store"; // eslint-disable-line import/default
import reducer from "./reducers";
import sagas from "./sagas";
// import history from "./utils/history";

const sagaMiddleware = createMiddleware();
const store = configureStore(reducer, sagaMiddleware);
sagaMiddleware.run(sagas);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById("app-root"));
