import React from "react";
import { DragSource } from "react-dnd";
const itemSource = {
  beginDrag(props) {
    return { img: props.imgsrc };
  },
  endDrag(props, monitor, component) {
    return props.handleProp(props.item.id);
  }
};
function collect(connect, monitor) {
  console.log("monitor.isDragging()", monitor.isDragging());
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const ImagesItems = props => {
  const { isDragging, connectDragSource, item, imgsrc } = props;

  const opacity = isDragging ? 0 : 1;
  const borderRadius = isDragging ? "hidden" : "dashed";
  return connectDragSource(
    <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
      <img src={imgsrc} style={{ opacity }} />
    </div>
  );
};

export default DragSource("item", itemSource, collect)(ImagesItems);
