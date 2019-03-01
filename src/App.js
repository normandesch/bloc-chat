import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

var config = {
  apiKey: "AIzaSyBaDIz1H4BvbVwRtY9jbaireMLGkiFauYo",
  authDomain: "bloc-chat-719f7.firebaseapp.com",
  databaseURL: "https://bloc-chat-719f7.firebaseio.com",
  projectId: "bloc-chat-719f7",
  storageBucket: "bloc-chat-719f7.appspot.com",
  messagingSenderId: "262569755756"
};
firebase.initializeApp(config);

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
        </header>
      </div>
    );
  }
}

export default App;
