import React from "react";
import ImgDragSrc from "./imgDragSrc";

const ImagesItems = props => {
  const { imgsrc } = props;

  return (
    <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
      <ImgDragSrc imgsrc={imgsrc} />
    </div>
  );
};

export default ImagesItems;
