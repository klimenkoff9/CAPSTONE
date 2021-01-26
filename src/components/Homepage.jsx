import React, { Component } from 'react'
import HalfHeaderBG from './HalfHeaderBG'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <HalfHeaderBG imgdiv='half-bg-homepage' title='Homepage' />
        <h1>Homepage</h1>
      </div>
    )
  }
}
