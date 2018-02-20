import React from "react";
import Flexbox from "flexbox-react";
import { Share } from "react-twitter-widgets";

class Detail extends React.Component {
  render() {
    const { resultDetail, type, percent } = this.props;
    const tweetText = "I'm a " + type + "! What Data Structure Type Are You?";
    return (
      <Flexbox
        key={Math.random()
          .toString(36)
          .substring(7)}
        className="responsiveWrap"
        width="90%"
        margin="auto"
      >
        <Flexbox flexDirection="column" margin="1.5em">
          <img
            src={require("../img/" + resultDetail.img.url)}
            alt={{ type } + " image"}
          />
          <em>{resultDetail.img.caption}</em>
        </Flexbox>
        <Flexbox>
          <Flexbox flexDirection="column">
            <h2>
              {resultDetail.type}
              {percent}
              <Share
                options={{
                  size: "large",
                  via: "_carolscott",
                  text: tweetText
                }}
                url="http://www.carolascott.com/data-structure-quiz"
              />
            </h2>
            {resultDetail.description} Famous {resultDetail.type}s:{" "}
            {resultDetail.examples}
            <p>
              <a href={resultDetail.link} target="_blank">
                Learn More on Wikipedia
              </a>
            </p>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    );
  }
}

export default Detail;
