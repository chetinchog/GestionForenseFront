import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import LocalStorage from "./lib/localStorageLib";

import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <main>
      <Router>
        {!LocalStorage.getRol() ? (
          <Switch>
            <Route component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        )}
      </Router>
    </main>
  );
}

export default App;
