import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={HomePage}>
      </Route>
    </Router>
  );
}

export default AppRouter;