import React from 'react';
import ReactDom from 'react-dom';

// react component kyala pennanna meka capital walin start karanwa.
function Greeting() {
  return <h4>This is pathum and this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));