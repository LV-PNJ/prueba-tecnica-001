import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  useRouteMatch,
} from "react-router-dom";

import Home from "../containers/home";

import Product from "../components/registrarProducto";
import VerProduct from "../components/verProduct";
import NavBar from "../components/navBar";
import AppContext from "../context/AppContext";

const App = () => {
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
  return (
    <>
      <Router>
        <NavBar />
        <Switch>

          <Route path={`/home`} component={Home} />
          <Route exact path={`/producto/ver`}>
            <VerProduct producto={producto} />
          </Route>
          <Route exact path={`/producto/registrar`}>
            <Product />
          </Route>
          <Route exact path={`/producto/eliminar`}>
            <Product />
          </Route>
          <Redirect strict from="/" to="/home/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
