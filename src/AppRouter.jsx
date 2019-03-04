import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import { ArticleDetail } from 'components/Article';

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/article/:pageId/:status" component={ArticleDetail}></Route>
    <Route component={Home} />
  </Switch>
);

export default AppRouter;