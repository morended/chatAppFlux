"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './simplechatapp/components/ChatApp.js'

class HelloWorld extends React.Component {
  render() {
    return(
      <h1>
      <ChatApp />
      </h1>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
