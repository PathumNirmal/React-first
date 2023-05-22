import React from "react";
import ReactDom from "react-dom";

// react component kyala pennanna meka capital walin start karanwa.
// function Greeting() {
//   return <h4>This is pathum and this is my first component</h4>;
// }

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//     </div>
//   );
// }

const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world")
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
