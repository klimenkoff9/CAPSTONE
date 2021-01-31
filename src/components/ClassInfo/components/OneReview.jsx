import React from 'react'

const OneReview = (props) => {
  return (
    <div className='review-container'>
      <h2>Student Review</h2>
      <br />
      <div className='review-text larger-text'>{props.reviewText}</div>
      <br />
      <div className='review-rating'>
        {' '}
        <strong>Rating - </strong> {props.rating}/5
      </div>
      <div className='review-takeagain'>
        <strong>Would take again? - </strong>
        {props.takeAgain ? <span>Yes</span> : <span>No</span>}
      </div>
      <div className='review-textbook'>
        <strong>Textbook? - </strong>
        {props.textbook ? <span>Yes</span> : <span>No</span>}
      </div>
      <div className='review-syllabus'>
        <strong>Syllabus? - </strong>{' '}
        {props.syllabus ? <span>Yes</span> : <span>No</span>}
      </div>
      <br />
    </div>
  )
}

export default OneReview
