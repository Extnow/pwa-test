import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
