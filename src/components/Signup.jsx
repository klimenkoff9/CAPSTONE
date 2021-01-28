import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import validateEmail from '../helper/validateEmail'
// import validatePassword from '../helper/validatePassword'
// import confirmPassword from '../helper/confirmPassword'

import { userSignUp } from "../redux/reducers/index";
import { connect } from "react-redux";

import '../css/login.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      disabled: false
    }
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
    console.log(this.state.passwordConfirm);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let userCredentials = {
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    console.log(userCredentials)
    this.setState({
      ...this.state,
      disabled: true
    })
    this.props.userSignUp(userCredentials);
  };

  render() {
    return (
      <div>
        <div className='bg-signup'>
          <div className='login-container'>
            <div className='form-container'>
              <h1>Sign Up</h1>
              <form onSubmit = {this.handleSubmit}>
              
                {// Removed because as a user who's leaving a bad review on my professor I wanna be anonymous  
                  /* <div className='form-control'>
                  <input
                    onChange={this.handleChange}
                    name='fullName'
                    type='text'
                    required
                  />
                  <label>
                    <span>Full Name</span>
                  </label>
                </div> */}
                {/* input fields */}

              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  // placeholder="Email"
                  required
                />
                <label>
                  <span>Email</span>
                </label>
              </div>

              <div className="form-control">
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  // placeholder="Password"
                  required
                />
                <label>
                  <span>Password</span>
                </label>
              </div>

                <div className='form-control'>
                  <input
                    name='passwordConfirm'
                    type='password'
                    onChange={this.handleChange}
                    required
                  />
                  <label>
                    <span>Confirm Password</span>
                  </label>
                </div>

                <p className='text error-msg'>{this.props.signUpResponse}</p>

                <button
                  type='submit'
                  className='btn'
                >
                  Sign Up
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

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    signUpResponse: state.signUpResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    userSignUp: (credentials) => dispatch(userSignUp(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)