import React from 'react'
import { Link } from 'react-router-dom'

export default function NavTop (props) {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <div>
        <Link to='/about'>About</Link>
        <Link to='/harvesters'>Harvesters</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    </nav>
  )
}
