import React, {Component} from 'react';
const axios = require('axios');

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value})
    console.log('Your zip code is' + this.state.zipcode)
  }

  handleSubmit(event) {

  }

  componentDidMount() {
    // the url for api
    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=60614,us&appid=052f26926ae9784c2d677ca7bc5dec98'
    // axios.get(poemApi)
    //     .then((response) => {
    //       this.setState({shakespeare: response.data.poem})
    //     }).catch((error) => {
    //       console.log('an error occured while parsing', error)
    //     })
    // // ----------axios doing axios in a different way, but with the sam e result
    axios({
      method: 'GET',
      url: weatherApi
    }).then((response) => {
      this.setState({weather: response.data.poem})
    }).catch((error) => {
      console.log('an error occured while parsing', error)
    })
  }



  render() {
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        <p>

      // display weather information here

        </p>
        <label>
          Please enter your zip code for the weather:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Get my forecast!" />
      </form>
      </div>
    )
    }
}
