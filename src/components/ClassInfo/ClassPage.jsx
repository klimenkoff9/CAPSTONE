import React from 'react'

import ClassInfo from './components/ClassInfo'
import Reviews from './components/Reviews'

import File from './components/File'

import '../../css/classpage.css'

const ClassPage = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props

  console.log(id)
  return (
    <div className='Class'>
      <ClassInfo id={id} />
      <div className='split-column'>
        <div className='split-column-1'>
          <button className='btn btn-yellow'>Add File</button>
          <div className='file-column'>
            <h2>Previous exams, syllabuses, material for this class</h2>
            <div className='files-container'>
              <div className='file-container-separator'>
                <File />
                <File />
                <File />
              </div>
              <div className='file-container-separator'>
                <File />
                <File />
                <File />
              </div>
              <div className='file-container-separator'>
                <File />
                <File />
                <File />
              </div>
              <div className='file-container-separator'>
                <File />
                <File />
                <File />
              </div>
              <div className='file-container-separator'>
                <File />
                <File />
                <File />
              </div>
            </div>
          </div>
        </div>
        <div className='split-column-2'>
          <Reviews id={id} />
        </div>
      </div>
    </div>
  )
}

export default ClassPage
