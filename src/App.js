import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './Page';

const Home = props => <Page title="Home" />;

const About = props => <Page title="About" />;

const Settings = props => <Page title="Settings" />;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/settings" component={Settings} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
