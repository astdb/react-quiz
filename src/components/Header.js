import React from "react";
import styled from "styled-components";

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  playAgain() {
    window.location.reload();
  }

  render() {
    const { playAgain } = this;

    const HeaderStyle = styled.h1`
      color: black;
      cursor: pointer;
      font-family: "Pacifico", cursive;
    `;

    return (
      <HeaderStyle onClick={playAgain}>
        What Data Structure Type Are You?
      </HeaderStyle>
    );
  }
}

export default Header;
