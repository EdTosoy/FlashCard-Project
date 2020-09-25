import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeProvider } from "./ContextAPI/homeContext";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <HomeProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/:tag" component={Home} />
          </Switch>
        </div>
      </Router>
    </HomeProvider>
  );
}

export default App;
