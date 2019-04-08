import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #eee;
  width: 150px;
  border-radius: 9px;
  padding: 10px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.11);
`;

const Image = styled.img`
  transition: 0.5s;
  max-width: 100%;
  filter: ${({ bestResult }) => (bestResult === 5 ? 'contrast(100%)' : 'contrast(10%)')};
`;

const countBestResult = () => {
  return Number(localStorage.getItem('bestResult'));
};

const Achievement = ({ img, text }) => (
  <Card>
    <Image bestResult={countBestResult()} src={img} alt={text} />
    <p>{text}</p>
  </Card>
);

export { Achievement };
