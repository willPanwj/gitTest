import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <p>git branch master: commit 1</p>
          <p>git branch master: commit 2</p>
          <p>git branch master: commit 3</p>
          <p>git branch master: commit 4</p>
          <p>git branch developer: commit 1</p>
          <p>git branch developer: commit 2</p>
          <p>git branch developer: commit 3</p>
          <p>git branch developer: commit 4</p>
          <p>git branch developer: commit 5</p>
        </header>
      </div>
    );
  }
}

export default App;
