import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
var traits = [], interests = ["JavaScript","React","Movies","Ice cream"];
traits[0] = React.createElement('h1', {}, 'An Awesome Person');
traits[1] = React.createElement('p', {}, 'Who is learning React');

interests = interests.map(i => React.createElement('li', {}, i));

traits[2] = React.createElement('ul', {className: 'my-interests'}, interests);

const meInReact = React.createElement('div', {className: 'me'}, traits)

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
