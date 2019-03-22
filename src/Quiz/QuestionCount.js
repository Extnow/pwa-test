import React from 'react';
import styled from 'styled-components';

const Count = styled.div`
  color: #666;
`;

const QuestionCount = ({ counter, total }) => <Count>{`Вопрос ${counter} из ${total}`}</Count>;

export { QuestionCount };
