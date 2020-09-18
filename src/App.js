import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { HomeProvider } from "./ContextAPI/homeContext"

function App() {
  return (
    <HomeProvider>
      <Router>
        <div className="App">
          <Header />
        </div>
      </Router>
    </HomeProvider>
  );
}

export default App;
