import React from "react";

const ImagesItems = ({ imgsrc, ...props }) => {
  return (
    <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
      <img src={imgsrc} />
    </div>
  );
};

export default ImagesItems;
