import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/login.css'

export default class Login extends Component {
  render() {
    return (
      <div className='bg-login'>
        <div className='login-container'>
          <div className='form-container'>
            <h1>Please Login</h1>
            <form>
              <div className='form-control'>
                <input type='text' required />
                <label>
                  <span>Email</span>
                </label>
              </div>

              <div className='form-control'>
                <input type='password' required />
                <label>
                  <span>Password</span>
                </label>
              </div>

              <button type='button' className='btn'>
                Login
              </button>
              <p className='text'>
                Don't have an account? <Link to='/signup'>Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
