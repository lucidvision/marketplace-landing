import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AboutContainer from 'app/About/AboutContainer'
import HomeContainer from 'app/Home/HomeContainer'

class MainContainer extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/about' component={AboutContainer} />
        </div>
      </Router>
    )
  }
}

export default MainContainer
