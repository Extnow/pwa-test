import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  margin-left: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #eee;
  }
`;

const AnswerOption = ({ answerType, answer, onAnswerSelection, answerContent }) => (
  <li>
    <Label>
      <input
        type="radio"
        name="radioGroup"
        checked={answerType === answer}
        value={answerType}
        disabled={answer}
        onChange={onAnswerSelection}
      />
      <Text>{answerContent}</Text>
    </Label>
  </li>
);

export { AnswerOption };
