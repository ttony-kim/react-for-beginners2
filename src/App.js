import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
/* URL을 보고있는 Component */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail></Detail>
        </Route>
        {/* 유저가 이 경로에 있으면 Home Route를 렌더링해준다. */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
