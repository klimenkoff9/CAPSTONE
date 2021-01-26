import React, { Component } from 'react'
import HalfHeaderBG from './HalfHeaderBG'

export default class Login extends Component {
  render() {
    return (
      <div>
        <HalfHeaderBG imgdiv='half-bg-login' title='Login' />
        <h1>It's working</h1>
      </div>
    )
  }
}
