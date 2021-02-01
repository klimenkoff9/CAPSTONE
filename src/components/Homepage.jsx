import React, { Component } from 'react'
import HalfHeaderBG from './HalfHeaderBG'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <HalfHeaderBG imgdiv='half-bg-homepage' title='Homepage' /> */}
        <div className='full-bg bg-homepage'>
          <div className='tint'>
            <div className='middle-align'>
              <h1>ClassMate</h1>
              <h2>
                Share materials (previous exams, syllabuses, etc.) and opinions
                of your semester classes and professors
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
