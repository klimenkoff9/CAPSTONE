import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addNewFile } from '../../../redux/reducers/index'

import { withRouter } from 'react-router-dom'
import validateURL from '../../../helper/validateURL'

class AddNewFile extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      url: '',
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let file = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url,
      searchId: this.props.match.params.id,
    }

    if (!validateURL(file.url)) {
      alert('Please enter a valid url.')
      return
    }

    console.log(file)
    await this.props.addNewFile(file)
    if (this.props.newFileMSG === 'File created!') {
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <div className='bg-login'>
        <div className='me'>
          <div className='form-container'>
            <h1>Post File</h1>
            <form onSubmit={this.handleSubmit}>
              {/* input fields */}
              <div className='form-control'>
                <input
                  name='title'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <label>
                  <span>Title</span>
                </label>
              </div>
              <div className='form-control'>
                <input
                  name='description'
                  type='text'
                  onChange={this.handleChange}
                  required
                />
                <label>
                  <span>Description</span>
                </label>
              </div>
              <div className='form-control'>
                <input
                  name='url'
                  type='text'
                  onChange={this.handleChange}
                  // placeholder="Paste URL"
                  required
                />
                <label>
                  <span>URL</span>
                </label>
              </div>
              <button type='submit' className='btn'>
                Post File
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..')
  return {
    newFileMSG: state.newFileMSG,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..')
  return {
    addNewFile: (file) => dispatch(addNewFile(file)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddNewFile)
)
