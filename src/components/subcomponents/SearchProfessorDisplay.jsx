import React, { Component } from 'react'

import profImg from '../../images/prof.png'
import SearchClassLink from './SearchClassLink'

export default class SearchProfessorDisplay extends Component {
  constructor(props) {
    super(props)

    this.createLinks = this.createLinks.bind(this)
  }

  createLinks = (classesTaught) => {
    let links = []

    for (const taughtClass of classesTaught) {
      links.push(
        <SearchClassLink
          title={`${taughtClass[0]} ${taughtClass[1]}`}
          link={`/class/${taughtClass[2]}`}
        />
      )
    }

    return links
  }

  render() {
    const { professorName, rating, classesTaught } = this.props

    let links = this.createLinks(classesTaught)

    return (
      <div className='search-professor-display'>
        <img src={profImg} alt='Initials of Professor' />
        <div className='search-professor-info'>
          <h3>{professorName}</h3>
          <span className='rating-color'>{rating}</span>
        </div>
        <div className='overview'>
          <h3>Classes Taught</h3>
          {links.map((component) => {
            return component
          })}
        </div>
      </div>
    )
  }
}
