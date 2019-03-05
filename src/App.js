import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

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
      super(props);

      this.state={
          activeRoom: '',
          activeUser: ''
        }

        this.setActiveRoom = this.setActiveRoom.bind(this);
        this.setUser = this.setUser.bind(this);

      }

      setUser(user) {
        this.setState({ activeUser: user })
      }

      setActiveRoom(room) {
        this.setState({ activeRoom: room })
        console.log(this.state.activeRoom)
      }


      render () {
        return (
          <div className='App'>
            <header>
              <h1> BLOC CHAT! </h1>
            </header>
            <main>
            <section id="sidebar">
            <RoomList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              setActiveRoom={this.setActiveRoom}
            />
          </section>
          <section id="main">
            <User
              firebase={firebase}
              setUser={this.setUser}
              user={this.state.activeUser}
            />
            <MessageList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              user={this.state.activeUser}
              setUser={this.setUser}
            />
          </section>
        </main>
      </div>
    )
  }
}

export default App;
