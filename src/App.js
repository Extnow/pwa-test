import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import AppQuiz from './Quiz';
import Gallery from './Gallery';
import { Header } from './Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={AppQuiz} />
          <Route exact path="/gallery" component={Gallery} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
