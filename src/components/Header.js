import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  color: black;
  cursor: pointer;
  font-family: "Pacifico", cursive !important;
`;

class Header extends React.Component {
  playAgain() {
    window.location.reload();
  }

  render() {
    const { playAgain } = this;

    return (
      <HeaderStyle onClick={playAgain}>
        What Data Structure Type Are You?
      </HeaderStyle>
    );
  }
}

export default Header;
