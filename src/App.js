import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  function sayHello() {
    var x=2;
     return x+2;
      }
  return (
    <div className="App">
       <input type='button' id='btns' value='x' onClick={sayHello}/>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
