## react-quiz

## About

`react-quiz` is a responsive multiple-choice quiz built with React, Flexbox and Styled-Components. 

Architecture inspiration came from (Mitch Gavin's)[https://github.com/mitchgavan/react-multi-choice-quiz] 2016 `react-multi-choice-quiz`, however this quiz is different in several key ways:

* Styling is entirely in JavaScript (no style sheets) thanks to `styled-components` and `flexbox-react`
* Architecture is modeled on Dan Abramov's (Presentational and Container Components)[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0]
* `calculateResult` algorithm allows multiple results (i.e. if answers are `[1,1,2,2,3]` results are `[1,2]`)
* Expanded quiz result display, with image, caption, link and text description for each result
* Twitter share button with dynamic text, thanks `react-twitter-widgets`
* Restart button allows replay

## Install

The quiz is built on (Create React App)[https://github.com/facebookincubator/create-react-app].

## Further Reading

These articles and tutorials helped me build the app and think about React architecture and structure:

