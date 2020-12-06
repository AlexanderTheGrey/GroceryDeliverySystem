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
import { auth } from "./FirebaseDeployment";

function App() {

  const [{}, dispatch] = useStateValue();
  
    useEffect(() => {
      // will only run once when the app component loads...
  
      auth.onAuthStateChanged((authUser) => {
        console.log("THE USER IS: ", authUser);
  
        if (authUser) {
          // the user just logged in / the user was logged in
  
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null,
          });
        }
      });
    }, []);

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
