import React from "react";
import "./App.css";

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick() {
    alert("Clicked");
  }

  render() {
    return <button onClick={this.onClick}>Click Me</button>;
  }
}

// function onClick () {
//     alert("Clicked!")
// }

// function App2() {
//   return (
//     <button onClick={onClick}>Click Me
//    </button>
//   );
// }
//export default App2;
