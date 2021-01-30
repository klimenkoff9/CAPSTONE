import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { auth } from "../redux/reducers/index";

import "../css/login.css";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      disabled: false
    };
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
    await this.props.auth(userCredentials, "login");
  };

  render() {
    return (
      <div className="bg-login">
        <div className="login-container">
          <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              {/* input fields */}
              <div className="form-control">
                <input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  placeholder="Email"
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
                  placeholder="Password"
                  required
                />
                <label>
                  <span>Password</span>
                </label>
              </div>

              <p className='text error-msg'>{this.props.logInResponse}</p>

              <button type="submit" className="btn">
                Login
              </button>
              <p className="text">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    logInResponse: state.logInResponse,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    auth: (credentials, login) => dispatch(auth(credentials, login))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)