import React from 'react'
import { Link } from 'react-router-dom'
import './NavHeader.css'

export default function NavHeader (props) {
  return (
    <nav className='nav-container'>
      <Link to='/'>
        <img
          className='logo'
          src='https://s3.amazonaws.com/coastline-us/coastline-logo-single-color.png' />
      </Link>
      <div>
        <Link className='link' to='/about'>{'About'}</Link>
        <Link className='link' to='/harvesters'>{'Harvesters'}</Link>
        <Link className='link' to='/blog'>{'Blog'}</Link>
      </div>
    </nav>
  )
}
