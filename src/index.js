import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
const awesome = React.createElement('h1', {}, 'An Awesome Person');
const learn = React.createElement('p', {}, 'Who is learning React');

const js = React.createElement('li', {}, "JavaScript");
const r = React.createElement('li', {}, "React");
const mov = React.createElement('li', {}, "Movies");
const ice = React.createElement('li', {}, "Ice cream");

const list = React.createElement('ul', {className: 'my-interests'}, [js, r, mov, ice]);

const meInReact = React.createElement('div', {className: 'me'}, [awesome, learn, list]);

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
