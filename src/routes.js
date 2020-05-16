import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        <Route path={`${process.env.PUBLIC_URL}/admin`} component={Login} />
        <Route
          path={`${process.env.PUBLIC_URL}/cadastro`}
          component={Cadastro}
        />
      </Switch>
    </BrowserRouter>
  );
}
