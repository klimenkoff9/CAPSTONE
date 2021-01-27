import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import validateEmail from '../helper/validateEmail'
import validatePassword from '../helper/validatePassword'
import confirmPassword from '../helper/confirmPassword'

import '../css/login.css'

export default class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: '',
    }

    this.handleSignup = this.handleSignup.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSignup = () => {
    let message = ''
    if (!confirmPassword(this.state.password, this.state.passwordConfirm))
      message = 'Passwords do not match.'

    if (!validatePassword(this.state.password))
      message = 'Password: 8 chars, 1 letter, 1 number'

    if (!validateEmail(this.state.email)) message = 'That is not a valid email.'

    if (this.state.fullName.trim() === '')
      message = 'You must enter your full name.'

    this.setState({ message: message })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <div className='bg-signup'>
          <div className='login-container'>
            <div className='form-container'>
              <h1>Please Signup</h1>
              <form>
                <div className='form-control'>
                  <input
                    onChange={this.handleChange}
                    name='fullName'
                    type='text'
                    required
                  />
                  <label>
                    <span>Full Name</span>
                  </label>
                </div>
                <div className='form-control'>
                  <input
                    onChange={this.handleChange}
                    name='email'
                    type='text'
                    required
                  />
                  <label>
                    <span>Email</span>
                  </label>
                </div>

                <div className='form-control'>
                  <input
                    onChange={this.handleChange}
                    name='password'
                    type='password'
                    required
                  />
                  <label>
                    <span>Password</span>
                  </label>
                </div>

                <div className='form-control'>
                  <input
                    onChange={this.handleChange}
                    name='passwordConfirm'
                    type='password'
                    required
                  />
                  <label>
                    <span>Confirm Password</span>
                  </label>
                </div>

                <p className='text error-msg'>{this.state.message}</p>

                <button
                  type='button'
                  className='btn'
                  onClick={this.handleSignup}
                >
                  Signup
                </button>
                <p className='text'>
                  Already have an account? <Link to='/login'>Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
