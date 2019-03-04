import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';

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
  constructor(props) {
      super(props)
      this.state = {
        activeRoom: '',
        user: ''
      };

    }

  setActiveRoom(room) {
    this.setState({ activeRoom: room });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1>Bloc Chat</h1>



          <RoomList
            firebase= { firebase }
            setActiveRoom={ this.setActiveRoom.bind(this) }
            activeRoom={ this.state.activeRoom }
          />


          
        </header>
      </div>
    );
  }
}

export default App;
