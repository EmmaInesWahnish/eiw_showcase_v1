import React from "react";
const IframeComponent = ({banner}) => {
console.log("banner",banner)
  return (
    <div className="container" >
      <iframe
        className="responsive-iframe"
        src={banner}>
      </iframe>
    </div>
  );
};

export default IframeComponent;
