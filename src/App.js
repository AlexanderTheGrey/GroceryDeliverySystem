import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./Home";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Search from "./Search";
import BrowseCategory from "./BrowseCategory"
import Login from "./Login"
import Payment from "./Payment";
import { auth } from "./FirebaseDeployment";

const publicPaymentKey = loadStripe(
  "pk_test_51HvfJHB54MmJLkp8nLMNpnsQ6Bkiz93wi2gqsWpNRXqeiouz67fOzHsUxQ0jpGdJz3WPzmS0L8bMMnZeIJCxcZAB00o8b1P8Py"
); // Payment Public Key

function App() {

  const [{}, dispatch] = useStateValue();
  
    useEffect(() => {
      auth.onAuthStateChanged((authenticatedUser) => { // Change user based on authentication status
        if (authenticatedUser) {
          dispatch({
            type: "SET_USER",
            user: authenticatedUser,
          });
        } else {
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
          <Route path="/payment">
            <Header />
              <Elements stripe={publicPaymentKey}>
                <Payment />
              </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
