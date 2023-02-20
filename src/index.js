import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProductList from "./ProductList";
import reportWebVitals from "./reportWebVitals";
import myProductArray from "./myProductArray";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductList products={myProductArray} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
