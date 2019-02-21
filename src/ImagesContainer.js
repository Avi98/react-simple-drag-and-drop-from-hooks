import React from "react";
import { DropTarget } from "react-dnd";
import ImgDragSrc from "./imgDragSrc";

const spec = {
  drop(props) {
    props.setDropState(props.imgsrc);
    console.log("droped", props);
    return {
      imgValId: props.imgsrc
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hover: monitor.isOver(),
    itemvase: monitor.getItem()
  };
}
class ImagesItems extends React.Component {
  render() {
    console.log("items", this.props.itemvase);
    console.log("hover", this.props.hover);
    const { connectDropTarget, imgsrc } = this.props;

    return connectDropTarget(
      <div style={{ borderStyle: "dashed", borderColor: "#948888" }}>
        <ImgDragSrc imgsrc={imgsrc} {...this.props} />
      </div>
    );
  }
}

export default DropTarget("item", spec, collect)(ImagesItems);
