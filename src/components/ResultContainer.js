import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Summary from "./Summary";
import Detail from "./Detail";

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  interpretResult() {
    const resultCount = this.state.finalResult.length;
    if (resultCount > 1) {
      return "Wow! You are more than one data structure! Here's how you scored:";
    }
    return;
  }

  calculatePercent() {
    if (this.state.finalResult.length > 1) {
      return ": " + Math.round(1 / this.state.finalResult.length * 100) + "%";
    } else {
      return "";
    }
  }

  playAgain() {
    window.location.reload();
  }

  render() {
    const { playAgain } = this;
    const finalResult = this.state.finalResult;
    const percent = this.calculatePercent();
    const summaryText = this.interpretResult(finalResult);
    const resultDescriptions = this.state.resultDescriptions;

    const PlayAgainButton = styled.button`
      background: #c0c0c0;
      font-size: 1em;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
      margin-top: 1em;
      padding: 1em;
      border: 2px solid black;
      border-radius: 3px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: lightgray;
        box-shadow: 1px 1px 2px black, 0 0 10px silver, 0 0 2px darkgray;
      }

      &:focus {
        background: lightgray;
      }
    `;

    const DetailBox = styled.div`
      border: 2px solid black !important;
      padding: 0.2em !important;
      width: 61.8% !important;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1em;
    `;

    return (
      <div>
        <Summary summaryText={summaryText} />
        {finalResult.map(function(type) {
          const resultDetail = resultDescriptions.find(function(element) {
            return element.type === type;
          });
          return (
            <DetailBox
              key={Math.random()
                .toString(36)
                .substring(7)}
            >
              <Detail
                percent={percent}
                resultDetail={resultDetail}
                type={type}
              />
            </DetailBox>
          );
        })}
        <div>
          <PlayAgainButton onClick={playAgain}>
            Take The Quiz Again!
          </PlayAgainButton>
          <p>
          <a href = "https://github.com/scottcarol/react-quiz/tree/master" target="_blank">Check out the GitHub repo</a>
          </p>
        </div>
      </div>
    );
  }
}

//TODO: Flesh out propTypes
ResultContainer.propTypes = {
  finalResult: PropTypes.array.isRequired,
  resultDescriptions: PropTypes.array.isRequired
};

export default ResultContainer;
