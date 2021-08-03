import React, { Fragment } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Panel01 from "./pages/panel01/index";
import Panel02 from "./pages/panel02/index";
import Panel03 from "./pages/panel03/index";


const App = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search/beer/by/name" component={Panel01}/>
      <Route exact path="/search/beer/by/id" component={Panel02}/>
      <Route exact path="/search/random/beer" component={Panel03}/>
    </Switch>
  </Fragment>
)

export default App;
