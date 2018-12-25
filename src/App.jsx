import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import { ArticleDetail } from 'components/Article';

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home}></Route>
    <Route path="/article/?pageId" component={ArticleDetail}></Route>
  </Switch>
);

export default AppRouter;