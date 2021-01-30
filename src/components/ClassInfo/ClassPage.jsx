import React from "react";

import ClassInfo from "./components/ClassInfo";
import Reviews from "./components/Reviews";

const ClassPage = ( props ) => {

  const { match: { params: { id } } } = props; 

  console.log(id);
  return (
    <div className="Class">
      <article>
        <ClassInfo id={id} />
        <Reviews id={id} />
      </article>
    </div>
  );
};

export default ClassPage;