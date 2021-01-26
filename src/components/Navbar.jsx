import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>Capstone Project</Link>
        </div>
        <div className='links'>
          <Link to='/about'>About</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/search'>Search</Link>
        </div>
      </div>
    )
  }
}
