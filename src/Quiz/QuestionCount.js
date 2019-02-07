import React from 'react';

const QuestionCount = ({ counter, total }) => (
  <React.Fragment>
    Question <span>{counter}</span> of <span>{total}</span>
  </React.Fragment>
);

export { QuestionCount };
