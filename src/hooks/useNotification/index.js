import ReactDOM from "react-dom";
import { useNotification } from "./useNotification";
const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi dont you",
  });
  return (
    <div>
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
