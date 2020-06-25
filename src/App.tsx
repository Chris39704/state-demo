import React from "react";
import { createBrowserHistory } from "history";
import { Route, Router, Switch, withRouter } from "react-router-dom";
import Home from "views/HomeView";
import HomeContext from "views/HomeViewContext";
import HomeReact from "views/HomeViewReactOnly";
import HomeMobX from "views/HomeViewMobX";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={withRouter(Home)} />
      <Route path="/mobx" component={withRouter(HomeMobX)} />
      <Route path="/context" component={withRouter(HomeContext)} />
      <Route path="/react" component={withRouter(HomeReact)} />
      <Route path="/threads" component={withRouter(HomeReact)} />
    </Switch>
  </Router>
);

export default App;
