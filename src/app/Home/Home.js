import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavHeader from 'components/NavHeader/NavHeader'

export default class Home extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div>
        <NavHeader />
        <div>Home</div>
      </div>
    )
  }
}
