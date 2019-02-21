import React from "react";
import { DropTarget } from "react-dnd";
import ImgDragSrc from "./imgDragSrc";

const spec = {
  drop(props) {
    console.log("droped", props);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}
const ImagesItems = props => {
  const { imgsrc, connectDropTarget } = props;

  return connectDropTarget(
    <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
      <ImgDragSrc imgsrc={imgsrc} />
    </div>
  );
};

export default DropTarget("item", spec, collect)(ImagesItems);
