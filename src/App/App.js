import React, { Component } from 'react'
import './App.css'
import RoutesContainer from '../components/AllPlayers/routes/RoutesContainer'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <h1>It works!</h1>
          <RoutesContainer />
        </header>
      </div>
    )
  }
}

export default App
