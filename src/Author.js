import React, { Component } from 'react';
import './App.css';

class Author extends Component {
  render() {
    return (
      <p>Written by {this.props.text}</p>
    )
  }
}

export default Author
