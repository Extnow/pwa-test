import React from 'react';
import styled from 'styled-components';

import { Question } from './Question';
import { QuestionCount } from './QuestionCount';
import { AnswerOption } from './AnswerOption';

const AnswersList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Hints = styled.div`
  padding: 20px 0px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-evenly;
`;

const Hint = styled.button`
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  color: white;
`;

const Quiz = ({
  questionId,
  questionTotal,
  question,
  questionImg,
  answer,
  answerOptions,
  onAnswerSelection
}) => (
  <>
    <QuestionCount counter={questionId} total={questionTotal} />
    <img width="100%" src={questionImg} alt="картинка вопроса" />
    <Question content={question} />
    <AnswersList>
      {answerOptions.map((key) => (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answerImg={key.img}
          answer={answer}
          questionId={questionId}
          onAnswerSelection={onAnswerSelection}
        />
      ))}
    </AnswersList>
    <Hints>
      <Hint color="#786FC3">50 x 50</Hint>
      <Hint color="#FF94A6">Двойной шанс</Hint>
    </Hints>
  </>
);

export { Quiz };
