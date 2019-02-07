import React from 'react';

const AnswerOption = ({ answerType, answer, onAnswerSelection, answerContent }) => (
  <li>
    <input
      type="radio"
      name="radioGroup"
      checked={answerType === answer}
      id={answerType}
      value={answerType}
      disabled={answer}
      onChange={onAnswerSelection}
    />
    <label htmlFor={answerType}>{answerContent}</label>
  </li>
);

export { AnswerOption };
