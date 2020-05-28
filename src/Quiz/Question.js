import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  padding: 0px 5px;
`;

const Question = ({ content }) => <Title>{content}</Title>;

export { Question };
