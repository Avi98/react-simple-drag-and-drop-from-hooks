import React from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    // props.setDragState(props.imgsrc);
    return { imgId: props.id };
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
function ImgDrag({ imgsrc, connectDragSource, isDragging }) {
  const opacity = isDragging ? 0 : 1;
  return connectDragSource(
    <img src={imgsrc} style={{ opacity }} alt={imgsrc ? "alt" : null} />
  );
}

export default DragSource("item", itemSource, collect)(ImgDrag);
