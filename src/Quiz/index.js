import React from 'react';

import { Question } from './Question';
import { quizQuestions } from '../api/quizQuestions';

class AppQuiz extends React.Component {
  state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOption: [],
    answer: '',
    answerCount: 0,
    result: '',
  };

  componentDidMount() {
    const shuffleAnswerOption = quizQuestions.map(question => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOption: shuffleAnswerOption[0],
    });
  }

  shuffleArray = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <React.Fragment>
        <Question content="dasdas" />
      </React.Fragment>
    );
  }
}

export default AppQuiz;
