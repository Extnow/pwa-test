// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  title: string,
};

export default ({ title }: Props) => (
  <div className="App">
    <header className="App-header">
      <h2>{title}</h2>
    </header>
    <p>This is the {title} page</p>
    <div className="App-navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  </div>
);
