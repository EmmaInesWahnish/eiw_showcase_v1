import React from "react";
const IframeComponent = ({width, height, banner}) => {
console.log("banner",banner)
  return (
    <div className="container" width={width} height={height}>
      <iframe
        class="responsive-iframe"
        src={banner}>
      </iframe>
    </div>
  );
};

export default IframeComponent;
