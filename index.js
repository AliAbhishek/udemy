import React from "react";
import ReactDOM from "react-dom/client";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
      }}
    />
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
