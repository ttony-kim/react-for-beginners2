import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalal</p>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
