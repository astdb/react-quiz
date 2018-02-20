import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #fad8e9;
  font-size: 1em;
  width: 61.8%;
  cursor: pointer;
  margin: 0.2em;
  padding: 1em;
  border: 2px solid black;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fdf3f8;
    box-shadow: 1px 1px 2px black, 0 0 10px silver, 0 0 2px darkgray;
  }

  &:focus {
    background: #fdf3f8;
  }
`;

class AnswerOption extends React.Component {
  render() {
    const { answerKey, answerType, updateResults, answerOption } = this.props;
    return (
      <div key={answerKey}>
        <Button value={answerType} onClick={updateResults}>
          {answerOption}
        </Button>
      </div>
    );
  }
}

export default AnswerOption;
