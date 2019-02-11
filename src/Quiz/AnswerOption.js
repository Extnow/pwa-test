import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
  margin-left: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  padding: 20px 20px;
  cursor: pointer;
  font-size: 18px;
  border-top: 1px solid #eee

  &:hover {
    background-color: #ddf;
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
