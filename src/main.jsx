import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { SWProductApp } from "./SWProductApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <SWProductApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
