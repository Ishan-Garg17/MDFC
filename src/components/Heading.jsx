import React from "react";
import './Heading.scss'
const Heading = ({heading,title}) => {
    
  return (
    <div className="app__heading">
      <span>{title}</span>
      <h1>{heading}</h1>
      <div className="heading__line">
        <div />
      </div>
    </div>
  );
};

export default Heading;
