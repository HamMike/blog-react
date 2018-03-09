import React, { Component } from 'react';
import Post from './Post';
import FavoriteMovie from './FavoriteMovie';
import FavoriteFood from './FavoriteFood';
import About from './About';
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {

    const { title, authors, body, comments } = this.props

    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home Page</Link>{' '}
            <Link to='/Post'>Main Blog</Link>{' '}
            <Link to='/FavoriteMovie'>Favorite Movies</Link>{' '}
            <Link to='/FavoriteFood'>Favorite Foods</Link>{' '}
            <Link to='/About'>About author</Link>
          </nav>
          <Route exact path='/' component={Homepage} />
          <Route path='/Post' component={() => <Post title={title} authors={authors} body={body} comments={comments} />} />
          <Route path='/FavoriteMovie' component={FavoriteMovie}/>
          <Route path='/FavoriteFood' component={FavoriteFood}/>
          <Route path='/About' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
