import React from "react";
import styled from "styled-components";
import ImagesItems from "./ImagesContainer";

const Contianer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-style: solid;
  border-color: #000000;
`;
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
class Items extends React.Component {
  state = {
    imgArray: [
      "https://via.placeholder.com/150/92c952",
      "https://via.placeholder.com/150/771796",
      "https://via.placeholder.com/150/24f355"
    ]
  };

  setDropState = (dropedObj, draggedItemIndex) => {
    const oldIndex = this.state.imgArray.indexOf(dropedObj.imgsrc);
    // let getOldSrc = this.state.imgArray[oldIndex];
    const newSrc = this.state.imgArray[draggedItemIndex.imgId];

    const newArray = this.state.imgArray.filter(
      (item, i) => this.state.imgArray[oldIndex] !== item
    );

    this.setState({
      imgArray: newArray
    });
  };
  render() {
    return (
      <div>
        <Contianer>
          {this.state.imgArray.map((imgs, id) => {
            return (
              <ImagesItems
                key={`${imgs}${id}`}
                id={id}
                imgsrc={imgs}
                setDropState={this.setDropState}
              />
            );
          })}
        </Contianer>
      </div>
    );
  }
}

export default Items;
