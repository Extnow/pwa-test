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
  border-top: 1px solid #eee;
  background-color: #fff;

  &:hover {
    background-color: #ddf;
  }

  @media (pointer: coarse) {
    &:hover {
      background-color: #fff;
    }
  }
`;

const AnswerOption = ({ answerType, answer, onAnswerSelection, answerContent }) => (
  <li>
    <Label aria-haspopup="true">
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
