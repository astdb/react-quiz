import React from "react";
import ReactDOM from "react-dom";

import quizQuestions from "./api/quizQuestions.js";
import quizResults from "./api/quizResults.js";

// components
import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";
import ResultContainer from "./components/ResultContainer";

// styles
import { injectGlobal } from "styled-components";

injectGlobal`

@media (max-width: 800px) {
  .responsiveWrap {
    display: block;
  }
}

html {
  font-size: 16px;
  color: black;
  text-align: center;
}
  body {
    background: white;
    font-family: 'Lato', sans-serif;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: quizQuestions,
      resultDescriptions: quizResults,
      answers: {
        Stack: 0,
        Queue: 0,
        "Linked List": 0,
        "Binary Search Tree": 0
      },
      finalResult: [],
      quizComplete: false,
      marker: 1
    };
    this.changeAnswer = this.changeAnswer.bind(this);
  }

  changeAnswer(selectedAnswer) {
    var updatedAnswers = Object.assign({}, this.state.answers);
    updatedAnswers[selectedAnswer]++;
    if (this.state.marker === this.state.questions.length) {
      var calculatedResult = calculateResult(updatedAnswers);
      let rules = this.state.finalResult.slice();
      let newOne = rules.concat(calculatedResult);
      this.setState((prevState, props) => ({
        answers: updatedAnswers,
        quizComplete: true,
        finalResult: newOne
      }));
    } else {
      var oneUp = this.state.marker;
      oneUp++;
      setTimeout(() => {
        this.setState({ answers: updatedAnswers, marker: oneUp });
      }, 500);
    }
  }

  renderQuiz() {
    return (
      <div>
        <QuizContainer
          marker={this.state.marker}
          changeAnswer={this.changeAnswer}
          questions={this.state.questions}
        />
      </div>
    );
  }

  renderResult() {
    return (
      <div>
        <ResultContainer
          finalResult={this.state.finalResult}
          resultDescriptions={this.state.resultDescriptions}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.quizComplete ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));

function calculateResult(answers) {
  // getMax() function thanks to polyccon: https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object
  const getMax = object => {
    return Object.keys(object).filter(x => {
      return object[x] === Math.max.apply(null, Object.values(object));
    });
  };
  return getMax(answers);
}
