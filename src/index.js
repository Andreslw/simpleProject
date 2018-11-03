import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import "./styles/App.css";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";

const getLocalStorage = () => {
  let localUsuarios = localStorage.getItem("store");
  if (localUsuarios) {
    return JSON.parse(localUsuarios);
  } else {
    return undefined;
  }
};

const storeListener = () => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
};

const store = createStore(reducers, getLocalStorage());
store.subscribe(storeListener);

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
