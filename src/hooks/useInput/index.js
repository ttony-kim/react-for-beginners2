import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import { useInput } from "./useInput";

const App = () => {
  const maxLen = (value) => {
    //return value.length < 10;
    return !value.includes("@");
  };
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
