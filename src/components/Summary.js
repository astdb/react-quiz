import React from "react";

class Summary extends React.Component {
  render() {
    const { summaryText } = this.props;
    return <h2>{summaryText}</h2>;
  }
}

export default Summary;
