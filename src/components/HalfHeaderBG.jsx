import React, { Component } from 'react'

import '../css/bg.css'

export default class HalfHeaderBG extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'half-bg ' + this.props.imgdiv}>
        <div className='middle-align'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}
