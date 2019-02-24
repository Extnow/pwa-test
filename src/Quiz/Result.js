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

const Result = ({ quizResult, refreshQuiz }) => (
  <>
    <p>Количество правильных ответов: {quizResult}</p>
    <ButtonWrapper>
      <Button onClick={refreshQuiz}>Пройти викторину снова</Button>
    </ButtonWrapper>
  </>
);
export { Result };
