import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";



function App() {
  const [{}, dispatch] = useStateValue();


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
