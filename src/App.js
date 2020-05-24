import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import AppQuiz from './Quiz';
import { Achievements } from './Achievements';
import { Header } from './Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={AppQuiz} />
          <Route exact path="/achievements" component={Achievements} />
        </>
      </BrowserRouter>
    );
  }
}
