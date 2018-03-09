import React, {Component} from 'react';
const axios = require('axios');

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakespeare: ''
    }
  }

  componentDidMount() {
    // the url for api
    let poemApi = 'http://ShakeItSpeare.com/api/poem'
    // fetch poem
    // fetch(poemApi)
    //   .then((response) => {
    //     return response.json()
    //   }).then((json) => {
    //     this.setState({shakespeare: json.poem})
    //   }).catch((error) => {
    //     console.log('an error occured while parsing', error)
    //   })
    // //----------- axios doing the same thing as fetch
    // axios.get(poemApi)
    //     .then((response) => {
    //       this.setState({shakespeare: response.data.poem})
    //     }).catch((error) => {
    //       console.log('an error occured while parsing', error)
    //     })
    // // ----------axios doing axios in a different way, but with the sam e result
    axios({
      method: 'GET',
      url: poemApi
    }).then((response) => {
      this.setState({shakespeare: response.data.poem})
    }).catch((error) => {
      console.log('an error occured while parsing', error)
    })
  }



  render() {
    let poetry = this.state.shakespeare
    if (this.state.shakespeare) {
      poetry = poetry
    } else {
      poetry = "Loading..."
    }
    return (
      <div>
        <h1>Home</h1>
        <h2>My Favorite Shakespreare Poem:</h2>
        <p>{poetry}</p>
      </div>
      )
    }
}


export default Homepage;
