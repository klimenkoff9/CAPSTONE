import React from "react";

const OneReview = ( props ) => {
  return (
    <div className="container">
      <div className="review">
        <div className="review">{props.reviewText}</div>
        <div className="campusId">RATING: {props.rating}/5</div>
        <div className="takeagain">Would take again? - {props.takeAgain ? <span>Yes</span> : <span>No</span>}</div>
        <div className="textbook">Textbook? - {props.textbook ? <span>Yes</span> : <span>No</span>}</div>
        <div className="syllabus">Syllabus? - {props.syllabus ? <span>Yes</span> : <span>No</span>}</div>
      </div>
      <br/>
    </div>
  )

};

export default OneReview;