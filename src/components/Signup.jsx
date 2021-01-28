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
      email: '',
      password: '',
      passwordConfirm: '',
      disabled: false
    }

    this.handleSignup = this.handleSignup.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
    [e.target.name]: e.target.value
    })
    console.log(this.state.email);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(userCredentials)
    this.setState({
      ...this.state,
      disabled: true
    })
    this.props.userLogIn(userCredentials);
  };

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
