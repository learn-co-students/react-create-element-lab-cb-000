import React from 'react';
import ReactDOM from 'react-dom';

const i1 = React.createElement('li', {}, "JavaScript")
const i2 = React.createElement('li', {}, "React")
const i3 = React.createElement('li', {}, "Movies")
const i4 = React.createElement('li', {}, "Ice cream")

const title = React.createElement('h1', {}, "An Awesome Person");
const paragraph = React.createElement('p', {}, "Who is learning React");
const list = React.createElement('ul', { className: 'my-interests'}, [i1, i2, i3, i4]);
const meInReact = React.createElement('div', { className: 'me'}, [title, paragraph, list]);


ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
