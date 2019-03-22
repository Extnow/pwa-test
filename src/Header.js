// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  color: #888;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  padding: 0 15px 15px 15px;

  &:hover {
    color: #000;
    border-bottom: 3px solid #000;
  }

  &.active {
    color: #000;
    border-bottom: 3px solid #000;
  }
`;

const Header = () => (
  <header className="App-header">
    <Link exact to="/">
      Главная
    </Link>
    <Link exact to="/quiz">
      Викторина
    </Link>
    <Link exact to="/achievements">
      Достижения
    </Link>
  </header>
);

export { Header };
