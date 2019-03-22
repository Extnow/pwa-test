import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  border: 3px solid #eee;
  width: 150px;
  border-radius: 15px;
  background-size: 120px 100px;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 4px #a4d9f9;
  }
`;

const countBestResult = () => {
  return +localStorage.getItem('bestResult');
};

const Image = styled.img`
  transition: 0.5s;
  max-width: 100%;
  filter: ${({ bestResult }) => (bestResult === 5 ? 'contrast(100%)' : 'contrast(10%)')};
`;

const Text = styled.p`
  color: #000;
`;

const Achievement = ({ id, isDone, type, img, text, doneAchievment }) => (
  <Button onClick={doneAchievment}>
    <Image bestResult={countBestResult()} src={img} alt={text} isDone={isDone} />
    <Text>{text}</Text>
  </Button>
);

export { Achievement };
