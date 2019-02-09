// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <div className="App-navigation">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/quiz">
        Quiz
      </Link>
      <Link className="link" to="/gallery">
        Gallery
      </Link>
    </div>
  </header>
);

export { Header };
