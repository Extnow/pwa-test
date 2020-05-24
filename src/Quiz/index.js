import React from 'react';
import styled from 'styled-components';

import { Quiz } from './Quiz';
import { quizQuestions } from '../api/quizQuestions';
import { Result } from './Result';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 800px;
  padding: 20px 0px 0px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
`;

const shuffleArray = (array) => {
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

class AppQuiz extends React.Component {
  state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answerCount: 0,
    result: ''
  };

  componentDidMount() {
    const shuffleAnswerOption = quizQuestions.map((question) => shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffleAnswerOption[0]
    });
  }

  setUserAnswer = (answer) => {
    if (answer === '1') {
      this.setState((state) => ({
        answerCount: state.answerCount + 1,
        answer: answer
      }));
    }
  };

  setNewQuestion = () => {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  };

  setResults = () => {
    this.setState((state) => ({ result: state.answerCount }));
  };

  handleAnswerSelected = (event) => {
    const { questionId } = this.state;

    this.setUserAnswer(event.currentTarget.value);
    if (questionId < quizQuestions.length) {
      this.setNewQuestion();
    } else {
      this.setResults();
    }
  };

  refreshQuiz = () => {
    window.location.reload();
  };

  render() {
    const { answer, answerOptions, question, questionId, result } = this.state;

    return (
      <Container>
        {result !== '' ? (
          <Result result={result} refreshQuiz={this.refreshQuiz} />
        ) : (
          <Quiz
            answer={answer}
            answerOptions={answerOptions}
            question={question}
            questionId={questionId}
            questionTotal={quizQuestions.length}
            onAnswerSelection={this.handleAnswerSelected}
          />
        )}
      </Container>
    );
  }
}

export default AppQuiz;
