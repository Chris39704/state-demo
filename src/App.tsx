import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import Home from 'views/HomeView';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path='/' component={withRouter(Home)} />
      <Route path='/home' component={withRouter(Home)} />
    </Switch>
  </Router>
);

export default App;
