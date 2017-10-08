import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

const title = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');

const javascript = React.createElement('li', {}, 'JavaScript');
const react = React.createElement('li', {}, 'React');
const movies = React.createElement('li', {}, 'Movies');
const iceCream = React.createElement('li', {}, 'Ice cream');

const bulletList = React.createElement('ul', { className: 'my-interests' }, [javascript, react, movies, iceCream]);

const meInReact = React.createElement('div', { className: 'me' }, [title, paragraph, bulletList]);

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
