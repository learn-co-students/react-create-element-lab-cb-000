import React from 'react';
import ReactDOM from 'react-dom';

let meInReact = 
  React.createElement("div", {className: "me"},
    React.createElement("h1", {}, "An Awesome Person"),
    React.createElement("p", {}, "Who is learning React"),
    React.createElement("ul", {className: "my-interests"}, [
      React.createElement('li', {}, "JavaScript"),
      React.createElement('li', {}, "React"),
      React.createElement('li', {}, "Movies"),
      React.createElement('li', {}, "Ice cream")
    ])
  )

// IMPORTANT!!!! uncomment the lines below to make your tests work

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
