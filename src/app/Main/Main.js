import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from 'app/About/About'
import Harvesters from 'app/Harvesters/Harvesters'
import Home from 'app/Home/Home'

class Main extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/harvesters' component={Harvesters} />
        </div>
      </Router>
    )
  }
}

export default Main
