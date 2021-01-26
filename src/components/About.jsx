import React, { Component } from 'react'
import HalfHeaderBG from './HalfHeaderBG'

export default class About extends Component {
  render() {
    return (
      <div>
        <HalfHeaderBG
          imgdiv='half-bg-about'
          title='About this Capstone Project'
        />
        <h1>About</h1>
      </div>
    )
  }
}
