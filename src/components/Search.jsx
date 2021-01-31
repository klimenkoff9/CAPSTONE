import React, { Component } from 'react'
import axios from 'axios'

import SearchProfessorDisplay from './subcomponents/SearchProfessorDisplay'

import backend from '../helper/backend'
import stringMatcher from '../helper/stringMatcher'

import '../css/search.css'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchQuery: '',
      professors: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.searchByClass = this.searchByClass.bind(this)
    this.searchByFaculty = this.searchByFaculty.bind(this)
    this.getAPISearch = this.getAPISearch.bind(this)
    this.resultsToMap = this.resultsToMap.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })

    /* uncomment/comment out below line to enable/disable automatic search
     * without having to press 'Enter'
     */
    // this.handleSearch()
  }

  handleSearch = () => {
    const query = this.state.searchQuery
    this.searchByFaculty(query)
  }

  searchByClass = (query) => {
    let className = ''
    let classNumber = ''

    let strSplit = query.split(' ')
    if (strSplit.length >= 2) {
      className = strSplit[0]
      classNumber = strSplit[1]
    } else {
      if (stringMatcher.onlyNumbers(query)) classNumber = query
      else className = query
    }

    this.getAPISearch('', className, classNumber)
  }
  searchByFaculty = (query) => {
    this.getAPISearch(query)
  }
  getAPISearch = async (nameOfFaculty, nameOfClass, numberOfClass) => {
    const sendJSON = {
      facultyName: !!nameOfFaculty ? nameOfFaculty : '',
      className: !!nameOfClass ? nameOfClass : '',
      classNumber: !!numberOfClass ? numberOfClass : '',
    }

    try {
      const response = await axios.post(`${backend}/api/search/get`, sendJSON)
      this.resultsToMap(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  resultsToMap = (results) => {
    let professors = new Map()

    for (const result of results) {
      if (!professors.has(result.facultyName)) {
        professors.set(result.facultyName, [
          {
            id: result.id,
            facultyName: result.facultyName,
            className: result.className,
            classNumber: result.classNumber,
          },
        ])
      } else {
        let currentData = professors.get(result.facultyName)
        currentData.push({
          id: result.id,
          facultyName: result.facultyName,
          className: result.className,
          classNumber: result.classNumber,
        })
        professors.set(result.facultyName, currentData)
      }
    }
    professors = Array.from(professors, ([name, value]) => ({ name, value }))
    this.setState({ professors: professors })
  }

  render() {
    let { professors } = this.state

    return (
      <div className='search-container'>
        <div className='half-bg half-bg-search'>
          <div className='middle-align'>
            <h1>Search for a professor at Brooklyn College</h1>
            <input
              type='text'
              name='searchQuery'
              className='search-field'
              placeholder='e.g. Taylan,Basak'
              onChange={this.handleChange}
              onKeyPress={(e) => {
                e.code === 'Enter' && this.handleSearch()
              }}
            />
          </div>
        </div>
        <div id='main'>
          {professors.map((prof) => {
            let classSections = []
            prof['value'].map((classSection) => {
              classSections.push([
                classSection.className,
                classSection.classNumber,
                classSection.id,
              ])
            })

            return (
              <SearchProfessorDisplay
                professorName={prof['value'][0].facultyName}
                rating='4.7'
                classesTaught={classSections}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
