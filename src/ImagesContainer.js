import React from "react";
import { DragSource } from "react-dnd";
const itemSource = {
  beginDrag(props) {
    console.log("is dragingn");
    return props.items;
  },
  endDrag(props, monitor, component) {
    return props.handleProp(props.item.id);
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const ImagesItems = ({ imgsrc, ...props }) => {
  const { isDragging, connectDragSource, item } = props;
  return connectDragSource(
    <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
      <img src={imgsrc} />
    </div>
  );
};

export default DragSource("item", itemSource, collect)(ImagesItems);
