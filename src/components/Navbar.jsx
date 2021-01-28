import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'
import { connect } from "react-redux";
import { logout } from "../redux/reducers/index";
class Navbar extends Component {

  render() {
    return (
      <div className='navbar'>
        <div className='logo'>
          <Link to='/'>Capstone Project</Link>
        </div>
        <div className='links'>
          <Link to='/about'>About</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/search'>Search</Link>
          <Link to ="/" onClick={this.props.handleClick}>Log Out</Link>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    // me: () => dispatch(me()),
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(null, mapDispatchToProps)(Navbar)