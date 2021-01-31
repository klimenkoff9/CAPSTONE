import React from 'react'
import { connect } from 'react-redux'
import { getClassReviews } from '../../../redux/reducers/index'
import { Link } from 'react-router-dom'

import OneReview from './OneReview'

class Reviews extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getClassReviews(this.props.id)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    console.log(this.props.classReviews)
    return (
      <div className='all-reviews-container'>
        <Link to={`/class/${this.props.id}/newreview`}>
          <button className='btn btn-red'>Add Review</button>
        </Link>
        {this.props.classReviews.length ? (
          this.props.classReviews.map((review, index) => {
            return (
              <OneReview
                key={index}
                reviewText={review.reviewText}
                rating={review.rating}
                takeAgain={review.takeAgain}
                textbook={review.textbook}
                syllabus={review.syllabus}
              />
            )
          })
        ) : (
          <h1>No reviews found. Be the first one!</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('Map state to props..')
  return {
    classReviews: state.classReviews,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('Map dispatching to props..')
  return {
    getClassReviews: (id) => dispatch(getClassReviews(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
