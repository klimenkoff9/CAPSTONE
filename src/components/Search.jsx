import React, { Component } from 'react'
import HalfHeaderBG from './HalfHeaderBG'

export default class Search extends Component {
  render() {
    return (
      <div>
        <HalfHeaderBG
          imgdiv='half-bg-search'
          title='Search for Professors or Courses'
        />
        <h1>It's working</h1>
      </div>
    )
  }
}
