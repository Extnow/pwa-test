// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="App">
    <header className="App-header">
      <h2>My first PWA</h2>
    </header>
    <div className="App-navigation">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  </div>
);

export { Header };
