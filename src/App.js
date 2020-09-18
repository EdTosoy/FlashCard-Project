import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { HomeProvider } from "./ContextAPI/homeContext"

function App() {
  return (
    <HomeProvider>
      <Router>
        <div className="App">
          <Switch >
            <Route exact path="/" component={Header}/>
            <Route exact path="/:tag" component={Header}/>
          </Switch>
        </div>
      </Router>
    </HomeProvider>
  );
}

export default App;
