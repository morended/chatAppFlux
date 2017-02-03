"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
render(){
  return(
    <h1> Hello World My name is Mounikasadas sdasd </h1>
  );
}
}
ReactDOM.render(<HelloWorld />,document.getElementById('app'));
