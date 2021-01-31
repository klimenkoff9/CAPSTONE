import React from "react";
import { connect } from "react-redux";
import { getClassFiles } from "../../../redux/reducers/index";
import { Link } from "react-router-dom";

import OneFile from "./OneFile";

import "../../../css/classpage.css"

class Files extends React.Component {
  async componentDidMount() {
    try {
      await this.props.getClassFiles(this.props.id);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    console.log(this.props.allClassFiles);
    return (
      <div className="split-column">
        <Link to={`/class/${this.props.id}/newfile`}>
        <button className="btn btn-yellow">Add File</button>
        </Link>
        <div className="split-column-1">
          <div className="file-column">
            <h2>Previous exams, syllabuses, material for this class</h2>
            <div className="files-container">
              <div className="file-container-separator"></div>
              {this.props.allClassFiles.length ? (
                this.props.allClassFiles.map((file, index) => {
                  return (
                    <OneFile
                      key={index}
                      title={file.title}
                      description={file.description}
                      url={file.url}
                    />
                  );
                })
              ) : (
                <h1>No files found. Be the first one!</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Map state to props..");
  return {
    allClassFiles: state.allClassFiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map dispatching to props..");
  return {
    getClassFiles: (id) => dispatch(getClassFiles(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Files);
