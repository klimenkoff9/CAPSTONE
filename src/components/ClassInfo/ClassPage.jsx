import React from "react";

import ClassInfo from "./components/ClassInfo";
import Reviews from "./components/Reviews";

import Files from "./components/Files";

import "../../css/classpage.css";

const ClassPage = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  console.log(id);
  return (
    <div className="Class">
      <ClassInfo id={id} />
      <div className="split-column">
        <div className="split-column-1">
          <Files id={id} />
        </div>
      </div>
      <div className="split-column-2">
        <Reviews id={id} />
      </div>
    </div>
  );
};

export default ClassPage;
