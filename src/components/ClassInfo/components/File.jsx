import React, { Component } from 'react'

export default class File extends Component {
  render() {
    return (
      <div className='file-box center'>
        <h2>Final Exam 2012.pdf</h2>
        <br />
        <p className='left'>
          <strong>Description:</strong> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Corrupti molestiae harum rem atque. Iste rerum aut
          consectetur quo tempore eius.
        </p>
        <br />
        <a href='#'>Link to File</a>
      </div>
    )
  }
}
