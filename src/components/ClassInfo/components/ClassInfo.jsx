import React from "react";
import { connect } from "react-redux";
import { getClassInfo } from "../../../redux/reducers/index";

class CampusInfo extends React.Component {

  async componentDidMount() {
    try {
        await this.props.getClassInfo(this.props.id);
    } catch (error) {
        console.error(error);
    };
  };

  render() {
      const {classDescription, 
      className,
      classNumber,
      facultyName
        } = this.props.classInfo;
      console.log(this.props.classInfo);
    return (
    <div>
        <h1>{className} {classNumber}: {classDescription} </h1>
        <h2>{facultyName}</h2>
    </div>);
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    classInfo: state.classInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    getClassInfo: (id) => dispatch(getClassInfo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusInfo);
