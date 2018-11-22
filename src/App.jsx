import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
    </Router>
  );
}

export default AppRouter;