import React, { Component } from 'react';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {
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
        <p> {body} </p>
        <h3>Comments:</h3>
        {allComments}
      </div>
    );
  }
}

export default Post;
