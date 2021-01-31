import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

import history from "../history"
import { connect } from "react-redux";
import { me } from "../redux/reducers/index";

import Homepage from '../components/Homepage'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Search from '../components/Search'
import About from '../components/About'
import ClassPage from "../components/ClassInfo/ClassPage";
import AddNewReview from "../components/ClassInfo/components/AddNewReview";


class App extends Component {

  async componentDidMount() {
    await this.props.loadInitialData();
    console.log(this.props.loadInitialData.isLoggedIn);
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log(this.props.loadInitialData.isLoggedIn);
    return (
      <div className='app'>
        <Router basename={process.env.PUBLIC_URL} history={history}>
          <Navbar isLoggedIn = {isLoggedIn} />

          <Switch>
          <Route exact path ='/' component={Homepage} />\
          <Route exact path ='/class/:id' component={ClassPage} />
          <Route exact path ='/class/:id/newreview' component={AddNewReview} />
            
          { !isLoggedIn && (
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
          )}

          {isLoggedIn && (
          <Switch>
            <Route exact path='/search' component={Search} />
            <Route exact path='/about' component={About} />
          </Switch>
          )}
          
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  console.log(state.defaultUser.id);
  return {
    isLoggedIn: !!state.defaultUser.id // might need to change
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    // me: () => dispatch(me()),
    loadInitialData() {
      dispatch(me());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
