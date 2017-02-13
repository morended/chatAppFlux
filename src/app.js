"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ChatApp from './ChatAppFlux/components/ChatApp.js'

class HelloWorld extends React.Component {
  render() {
    return(
       <ChatApp />
      
      );
}
}
  

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
