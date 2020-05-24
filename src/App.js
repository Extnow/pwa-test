import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './Home';
import { AppQuiz } from './Quiz';
import { Achievements } from './Achievements';
import { Header } from './Header';

export const App = () => (
  <BrowserRouter>
    <>
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={AppQuiz} />
      <Route exact path="/achievements" component={Achievements} />
    </>
  </BrowserRouter>
);
