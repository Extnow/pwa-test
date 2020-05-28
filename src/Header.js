// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Link = styled(NavLink)`
  color: #666;
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
  <HeaderStyled>
    <Link exact to="/">
      Главная
    </Link>
    <Link exact to="/quiz">
      Викторина
    </Link>
    <Link exact to="/achievements">
      Достижения
    </Link>
  </HeaderStyled>
);

export { Header };
