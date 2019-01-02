import React from 'react';
import { Link } from 'react-router-dom';

export default ({ title }) => (
  <div>
    <h2>{title}</h2>
    <p>This is the {title} page</p>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/settings">Settings</Link>
  </div>
);
