import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { userLogIn } from "../redux/reducers/index";

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
    this.props.userLogIn(userCredentials);
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

              <button type="submit" className="btn">
                Login
              </button>
              <p className="text">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
              {/* Approval/Rejection alert */}
              <div className="alertMessage">
                { this.state.disabled ?
                  (alert(this.props.logInResponse)) : (console.log("Not today buddy"))
                }
              </div>
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
    userLogIn: (credentials) => dispatch(userLogIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)