# React createElement() Lab

## Overview

In this lab, you'll build a simple view using `createElement()`.

## Representing
![Internet.](https://media.giphy.com/media/l41YlCTJyClA4HFba/giphy.gif)

Before we start, don't forget to add the `React` and `ReactDOM` libraries to your `index.html`:

```html
<script src="node_modules/react/dist/react.js"></script>
<script src="node_modules/react-dom/dist/react-dom.js"></script>
```

This should be _after_ any page content, and _before_ your own `index.js` script.

Your task is to create a React element that represents _you_ (or a close approximation, hopefully)! In the `index.js` file create a variable called `meInReact`. This variable should be a React element, and should have the following structure:

```html
<div class="me">
  <h1>An Awesome Person</h1>
  <p>Who is learning React</p>
  
  <ul class="me__interests">
    <li>JavaScript</li>
    <li>React</li>
    <li>Movies</li>
    <li>Ice cream</li>
  </ul>
</div>
```

Feel free to render out the component in the DOM using `ReactDOM.render()`.

## Resources
- [React Top-Level API](https://facebook.github.io/react/docs/top-level-api.html)
