import React from 'react';

import { Question } from './Question';
import { QuestionCount } from './QuestionCount';
import { AnswerOption } from './AnswerOption';

const Quiz = ({ questionId, questionTotal, question, answer, onAnswerSelection }) => (
  <>
    <QuestionCount counter={questionId} total={questionTotal} />
    <Question content={question} />
    <ul>
      {AnswerOption.map(key => (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          answer={answer}
          questionId={questionId}
          onAnswerSelection={onAnswerSelection}
        />
      ))}
    </ul>
  </>
);

export { Quiz };
