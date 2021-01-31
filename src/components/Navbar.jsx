import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../css/navbar.css'
import { connect } from 'react-redux'
import { logout } from '../redux/reducers/index'
class Navbar extends Component {
  render() {
    const { isLoggedIn } = this.props
    // const isLoggedIn = true
    return (
      <div className='navbar'>
        <div className='links'>
          <div className='links-col-1'>
            <div className='logo'>
              <Link to='/'>Capstone Project</Link>
            </div>
            <Link to='/about'>About</Link>
            {isLoggedIn && <Link to='/search'>Search</Link>}
          </div>
          <div className='links-col-2'>
            {!isLoggedIn && <Link to='/login'>Login</Link>}
            {!isLoggedIn && <Link to='/signup'>Sign Up</Link>}
            {isLoggedIn && (
              <Link to='/login' onClick={this.props.handleClick}>
                Log Out
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..')
  return {
    // me: () => dispatch(me()),
    handleClick() {
      dispatch(logout())
    },
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navbar))
