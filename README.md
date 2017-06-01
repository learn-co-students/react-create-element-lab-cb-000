# React createElement() Lab

## Overview

In this lab, you'll build a simple view using `createElement()`.

## Representing
![Internet.](https://media.giphy.com/media/l41YlCTJyClA4HFba/giphy.gif)

Your task will be to create a React element that represents _you_ (or a close approximation, hopefully)! In the `src/index.js` file create a variable called `meInReact`. This variable should be a React element, and should have the following structure:

```html
<div class="me">
  <h1>An Awesome Person</h1>
  <p>Who is learning React</p>
  
  <ul class="my-interests">
    <li>JavaScript</li>
    <li>React</li>
    <li>Movies</li>
    <li>Ice cream</li>
  </ul>
</div>
```

To start the application type this in the terminal:

```
npm install
npm start
```

To run the test suite type this in the terminal: 

```
npm test
```

Feel free to render out the component in the DOM using `ReactDOM.render()`.

## NOTE!! 

Ignore this error message:

> Warning: Each child in an array or iterator should have a unique "key" prop. Check the top-level render call using <ul> in li.

We will cover how to fix this error in a later lesson.

## Resources
- [React Top-Level API](https://facebook.github.io/react/docs/top-level-api.html)
