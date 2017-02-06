"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student.js';

class ChatApp extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
      this.sendMessage=this.sendMessage.bind(this);

  }
  sendMessage(message){
    let smessages = this.state.messages;
      smessages.push(message);
      this.setState({
        messages:smessages
      })
  }
  render() {
    return (
      <div>
      <Student id="Student1 :" messages={this.sendMessage}/>
      <Student id="Student2 :" messages={this.sendMessage}/><br/>
      {this.state.messages.map((message, index) => (
       <p key={index}>{message}</p>
     ))}

      </div>

    );
  }
}
export default ChatApp;
