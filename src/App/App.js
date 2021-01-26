import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

import Homepage from '../components/Homepage'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Search from '../components/Search'
import About from '../components/About'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
