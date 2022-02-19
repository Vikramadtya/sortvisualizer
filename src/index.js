import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "bulma/css/bulma.min.css";

import rootReducer from "./Utility/Reducer/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
