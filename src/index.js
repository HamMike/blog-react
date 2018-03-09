import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "Dinosaurs are awesome",
  authors: ["Slutty Stegosaurus", "Tiny Rex", "Iguanadon Ivory"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now"]
}

ReactDOM.render(
  <App
  title={post.title}
  authors={post.authors}
  body={post.body}
  comments={post.comments}
  />,
  document.getElementById('root'));
registerServiceWorker();
