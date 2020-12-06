import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Search from "./Search";
import BrowseCategory from "./BrowseCategory"
import Login from "./Login"

function App() {

  const [{}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/search">
            <Header />
            <Search />
          </Route>
          <Route exact path="/BrowseCategory">
            <Header />
            <BrowseCategory />
          </Route>
          <Route exact path="/Login">
            <Header />
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
