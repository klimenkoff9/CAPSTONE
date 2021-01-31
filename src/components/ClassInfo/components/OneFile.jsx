import React, { Component } from 'react'

class OneFile extends Component {
  render() {
    return (
      <div className='file-box center'>
        <h2>{this.props.title}</h2>
        <br />
        <p className='left'>
          <strong>Description:</strong> {this.props.description}
        </p>
        <br />
        <a href={this.props.url} target="_blank">Link to File</a>
      </div>
    )
  }
}

export default OneFile;