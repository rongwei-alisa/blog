import React from 'react';
import { hashHistory, Router, Route } from 'react-router';
import HomePage from './components/HomePage';

// const Dashboard = React.createClass({
//   render() {
//     return <div>Welcome to the app!</div>
//   }
// });

function AppRouter() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={HomePage}>
        {/* <IndexRoute component={Dashboard} /> */}
      </Route>
    </Router>
  );
}

export default AppRouter;