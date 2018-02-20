import React from "react";
import shuffle from "shuffle-array";
import Question from "./Question";
import AnswerOption from "./AnswerOption";

class QuizContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.sendAnswerToParent = this.sendAnswerToParent.bind(this);
  }

  sendAnswerToParent = e => {
    this.props.changeAnswer(e.target.value);
  };

  getCurrentQuestion() {
    const currentQuestion = this.props.marker - 1;
    return this.props.questions[currentQuestion].question;
  }

  getCurrentAnswers() {
    const currentQuestion = this.props.marker - 1;
    return shuffle(this.props.questions[currentQuestion].answers);
  }

  render() {
    const { sendAnswerToParent } = this;
    const marker = this.props.marker;
    const answerArray = this.getCurrentAnswers();
    const currentQuestion = this.getCurrentQuestion();

    return (
      <div>
        #{marker} of {this.props.questions.length}
        <Question question={currentQuestion} />
        {answerArray.map(function(answer, index) {
          return (
            <AnswerOption
              key={Math.random()
                .toString(36)
                .substring(7)}
              answerOption={answer.content}
              answerType={answer.type}
              answerKey={answer.id}
              updateResults={sendAnswerToParent}
            />
          );
        })}
      </div>
    );
  }
}

export default QuizContainer;
