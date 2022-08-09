import React, { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
