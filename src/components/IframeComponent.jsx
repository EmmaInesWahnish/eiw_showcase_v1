import React from "react";
const IframeComponent = ({width, height, banner}) => {
console.log("banner",banner)
  return (
    <div className="container" style={{width:{width}, height:{height}}}>
      <iframe
        className="responsive-iframe"
        src={banner}>
      </iframe>
    </div>
  );
};

export default IframeComponent;
