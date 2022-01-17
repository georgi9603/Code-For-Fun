import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
