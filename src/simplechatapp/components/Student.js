"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Student extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ""
    }
    this._handleClick=this._handleClick.bind(this);
  this._handleOnChange=this._handleOnChange.bind(this);
  }
  render() {
    return(
      <div>
    {this.props.id}<input type="text"  value={this.state.message} onChange={this._handleOnChange}/>
    <input type="Button" value="send"  onClick={this._handleClick}/>
      </div>
    );
  }
  _handleOnChange(event){

   this.setState({message:event.target.value})
 }
 _handleClick(){
   this.props.messages(this.props.id+this.state.message);
   this.state.message="";
 }
}
export default Student;
