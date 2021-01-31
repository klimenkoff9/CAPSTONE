import React, { Component } from "react";

import { connect } from "react-redux";
import { addNewReview } from "../../../redux/reducers/index";

import { withRouter } from "react-router-dom";

class AddNewReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewText: "",
      rating: 5,
      takeAgain: null,
      textbook: null,
      syllabus: null,
    };
  }

  handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.rating);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let review = {
      reviewText: this.state.reviewText,
      rating: this.state.rating,
      takeAgain: this.state.takeAgain,
      textbook: this.state.textbook,
      syllabus: this.state.syllabus,
      searchId: this.props.match.params.id
    };
    console.log(review);
     await this.props.addNewReview(review);
     if (this.props.newReviewMSG) {
         this.props.history.goBack();
     }
  };

  render() {
    return (
      <div className="bg-login">
        <div className="me">
          <div className="form-container">
            <h1>Leave a review</h1>
            <form onSubmit={this.handleSubmit}>
              {/* input fields */}
              <div>
                <label>
                  <span>Share you experience down here: </span>
                </label>
                <textarea
                  name="reviewText"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <input
                  name="rating"
                  type="range"
                  onChange={this.handleChange}
                  min="0"
                  max="5"
                  step="1"
                  required
                />
                <label>
                  <span>You rating out of 5</span>
                </label>
                <br/>
                <br/>
                <br/>
              </div>
              <div onChange= {this.handleChange}>
              <label>
                  <span>Would you take this class with this professor again? </span>
                </label>
                <input type="radio" name="takeAgain" value = {true}/> Yes
                <input type="radio" name="takeAgain" value = {false}/> No
              </div>
              <div onChange= {this.handleChange}>
              <label>
                  <span>Does this class require textbook</span>
                </label>
                <input type="radio" name="textbook" value = {true}/> Yes
                <input type="radio" name="textbook" value = {false}/> No
              </div>
              <div onChange= {this.handleChange}>
              <label>
                  <span>Do you have a syllabus from this class?</span>
                </label>
                <input type="radio" name="syllabus" value = {true}/> Yes
                <input type="radio" name="syllabus" value = {false}/> No
              </div>
              <button type="submit" className="btn">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    newReviewMSG: state.newReviewMSG,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    addNewReview: (review) => dispatch(addNewReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewReview));
