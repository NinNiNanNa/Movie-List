import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
