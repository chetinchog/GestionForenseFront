import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import SecurityManager from "./managers/SecurityManager";

import TopBar from "./components/TopBar";
import Login from "./components/Login";
import Home from "./components/Home";
import EvidenceTable from "./components/Evidences/EvidenceTable";
import EvidenceView from "./components/Evidences/EvidenceView";
import EvidenceNew from "./components/Evidences/EvidenceNew";

function App() {
  return (
    <main>
      {SecurityManager.getRol() && (
        <TopBar
          {...{
            rol: SecurityManager.getRol(),
            name: SecurityManager.getUserName()
          }}
        ></TopBar>
      )}
      <Router>
        {!SecurityManager.getRol() ? (
          <Route component={Login} />
        ) : (
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/evidences" component={EvidenceTable} exact />
            <Route path="/evidences/new" component={EvidenceNew} exact />
            <Route path="/evidences/view/:id" component={EvidenceView} exact />
          </Switch>
        )}
      </Router>
    </main>
  );
}

export default App;
