import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  padding-bottom: 20px;
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  padding: 5px 10px;
`;

const Result = ({ result, refreshQuiz }) => {
  const checkBestResult = () => {
    const bestResult = localStorage.getItem('bestResult');
    if (result > bestResult) {
      localStorage.setItem('bestResult', result);
    }
  };

  return (
    <>
      {checkBestResult()}
      <p>Количество правильных ответов: {result}</p>
      <ButtonWrapper>
        <Button onClick={refreshQuiz}>Пройти викторину снова</Button>
      </ButtonWrapper>
    </>
  );
};

export { Result };
