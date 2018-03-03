import * as React from 'react';
import './App.css';
import { Router } from 'kpd-router';
import { router } from './routerConfig';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router router={router} />
      </div>
    );
  }
}



export default App;
