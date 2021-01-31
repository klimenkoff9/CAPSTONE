import React, { Component } from 'react'

export default class SearchClassLink extends Component {
  render() {
    const { title, link } = this.props

    return (
      <span>
        <a className='section-link' href={link}>
          {title}
        </a>
        ,&nbsp;
      </span>
    )
  }
}
