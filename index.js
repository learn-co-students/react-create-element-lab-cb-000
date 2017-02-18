//Code React element here
const meInReact = React.createElement('div', {className:'me'}, [
  React.createElement('h1', {}, 'An Awesome Person'), React.createElement('p', {}, 'Who is learning React'),
  React.createElement('ul', {class:'me__interests'}, [React.createElement('li', {}, 'JavaScript'), React.createElement('li', {}, 'React'), React.createElement('li', {}, 'Movies'), React.createElement('li', {}, 'Ice cream')])
]);

ReactDOM.render('<meInReact />', document.getElementById('main'));
