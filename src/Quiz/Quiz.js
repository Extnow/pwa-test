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

const Quiz = ({
  questionId,
  questionTotal,
  question,
  answer,
  answerOptions,
  onAnswerSelection,
}) => (
  <>
    <QuestionCount counter={questionId} total={questionTotal} />
    <Question content={question} />
    <AnswersList>
      {answerOptions.map(key => (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={answer}
          questionId={questionId}
          onAnswerSelection={onAnswerSelection}
        />
      ))}
    </AnswersList>
  </>
);

export { Quiz };
