import ReactDOM from "react-dom";
import { useFullScreen } from "./useFullScreen";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src="https://cdn.pixabay.com/photo/2022/07/26/19/54/spain-7346597_960_720.jpg" />
        <button onClick={triggerFull}>Make fullscreen</button>
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
