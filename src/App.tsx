import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import Home from 'views/HomeView';
import HomeContext from 'views/HomeViewContext';
import HomeReact from 'views/HomeViewReactOnly';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path='/' component={withRouter(Home)} />
      <Route path='/context' component={withRouter(HomeContext)} />
      <Route path='/react' component={withRouter(HomeReact)} />
    </Switch>
  </Router>
);

export default App;
