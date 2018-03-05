import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {

    return (
      <p>{this.props.text}</p>
    )
  }
}

export default Comment
