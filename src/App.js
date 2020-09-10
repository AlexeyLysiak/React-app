import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting/Greeting.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting text='Hi, its new React app'/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
