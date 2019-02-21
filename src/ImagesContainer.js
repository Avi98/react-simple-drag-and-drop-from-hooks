import React from "react";
import { DropTarget } from "react-dnd";
import ImgDragSrc from "./imgDragSrc";

const spec = {
  drop(props, monitor) {
    props.setDropState(props, monitor.getItem());
    return {
      imgValId: props.imgsrc
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hover: monitor.isOver()
    // itemId: monitor.getItem()
  };
}
class ImagesItems extends React.Component {
  render() {
    const { connectDropTarget, imgsrc } = this.props;
    // console.log("this.props.itemId", this.props.itemId);
    return connectDropTarget(
      <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
        <ImgDragSrc imgsrc={imgsrc} {...this.props} />
      </div>
    );
  }
}

export default DropTarget("item", spec, collect)(ImagesItems);
