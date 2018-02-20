import React from "react";

class Question extends React.Component {
  render() {
    const { question } = this.props;
    return <h3>{question}</h3>;
  }
}

export default Question;
