

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
// import Registro from "./Pages/Registro";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
        <Switch>
          {/* <Route path="/registro">
            <Registro />
          </Route> */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
