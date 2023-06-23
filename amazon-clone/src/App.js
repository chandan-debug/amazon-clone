import React, { useEffect, useState } from "react";import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

import { auth } from "./firebase";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Order from "./Order";

const promise = loadStripe(
  "pk_test_51NKK8ASJCcCDmXfDtiWVUjInOKUhWPUp5NY4yhQ1z15TdAus7dO7yuQiWCStqzMNzB3Kk1ruLzaYcdxDX3rkI30600ucCjjwdP"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

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
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element= {<Checkout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        
        <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
        
        

        </Routes>
    </Router>
  </div>
);
}
export default App;
