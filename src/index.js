import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work

// const meInReact = React.createElement('h1',{},'My First React Code');
const title = React.createElement('h1', {},'An Awesome Person');
const subtitle = React.createElement('p', {},'Who is learning React');
const myList = React.createElement('ul', { className: 'my-interests'},
  [
    React.createElement('li', { className: 'my-interests' }, 'Javascript'),
    React.createElement('li', { className: 'my-interests' }, 'React'),
    React.createElement('li', { className: 'my-interests' }, 'Movies'),
    React.createElement('li', { className: 'my-interests' }, 'Ice Cream')
  ]
);

const container = React.createElement('div', { className: 'me' }, [title, subtitle, myList])

ReactDOM.render(
  container,
  document.getElementById('global')
);

// export default meInReact;
export default container;
