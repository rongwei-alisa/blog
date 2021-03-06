import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/**
 * const没有变量提升，为何可以在Home定义之前引用它
 * match match.path match.url有何不同
 * you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.
 * <Route render={(props) => <About {...props} />} />  props哪里来的
 * server rendering
 */

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = (props) => {
  console.log(props)
  return <h2>About</h2>
};
const Topic = (props) => {
  console.log(props);
  return <h3>Requested Param: {props.match.params.id}</h3>
};
const Topics = (props) => {
  console.log(props)
  const { match } = props;
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
};

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);

export default App;