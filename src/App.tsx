import { hot } from 'react-hot-loader/root';
import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import Home from 'views/HomeView';
import HomeContext from 'views/HomeViewContext';
import HomeReact from 'views/HomeViewReactOnly';
import HomeMobX from 'views/HomeViewMobX';
import HomeThreads from 'views/HomeViewThreads';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/" component={withRouter(Home)} />
        <Route path="/mobx" component={withRouter(HomeMobX)} />
        <Route path="/context" component={withRouter(HomeContext)} />
        <Route path="/react" component={withRouter(HomeReact)} />
        <Route path="/threads" component={withRouter(HomeThreads)} />
      </Switch>
    </Router>
  );
};

export default hot(App);
