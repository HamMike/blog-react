import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {

  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
    this.onChange = this.onChange.bind(this)
  }

  changeBody(event) {
    this.setState({
      body: prompt()
    })
  }

  onChange(e) {
  this.setState ({
    body: e.target.value
  })
}

  render() {

    const { title, authors, body, comments } = this.props

    {/*let allComments = [
      <Comment text={comments[0]}/>,
      <Comment text={comments[1]}/>,
      <Comment text={comments[2]}/>
    ]*/}

    let allComments = comments.map(function(comment, index) {
      return <Comment key={index} text={comment} />
    })

    {/*let allAuthors = [
      <Author text={authors[0]}/>,
      <Author text={authors[1]}/>,
      <Author text={authors[2]}/>
    ]*/}

    let allAuthors = authors.map(function(author, index) {
      return <Author key={index} text={author} />
    })

    return (
      <div>
        <h1>{title}</h1>
        {allAuthors}
        <p> {this.state.body} </p>
        <h3>Comments:</h3>
        {allComments}
        
        <input type="text" value={this.state.body} onChange={this.onChange} />
        <button onClick={ (event) => this.changeBody(event) }>Edit body</button>

      </div>
    );
  }
}

export default Post;
