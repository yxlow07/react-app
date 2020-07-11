import React from 'react';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import 'bootstrap/dist/css/bootstrap.css'
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
  return (
    <div className="App">
      {/*<Greet name="Bruce" greeting="Hello" />
      <Greet name="Clark" greeting="Welcome">
          <button className="btn btn-outline-success">Button</button>
      </Greet>
      <Greet name="Diana" greeting="Good day, "/>*/}
      {/*<br/>*/}
      {/*<hr/>*/}
      {/*<br/>*/}
      {/*<Welcome name="Bruce" greeting="Hello"/>
      <Welcome name="Clark" greeting="Welcome"/>
      <Welcome name="Diana" greeting="Good day, "/>
      <Hello />
      <Message />
      <Counter />*/}
      <FunctionClick />
      <br />
      <hr/>
      <br/>
      <ClassClick />
    </div>
  );
}

export default App;
