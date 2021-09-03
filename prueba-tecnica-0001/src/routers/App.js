import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../containers/home";

import Product from "../components/registrarProducto";
import VerProduct from "../components/verProduct";
import NavBar from "../components/navBar";
import AppContext from "../context/AppContext";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const [checking, setChecking] = useState([]);
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    AppContext.getAll("products")
      .then((response) => {
        setProducto({ data: response });
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
console.log(producto)
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path={`/producto/ver`}>
            <VerProduct producto={producto} />
          </Route>
          <Route path={`/producto/registrar`}>
            <Product />
          </Route>
          <Route path={`/eliminar`}>
            <Product />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
