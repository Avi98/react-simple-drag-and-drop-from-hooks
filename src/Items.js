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
      "https://via.placeholder.com/150/24f355",
      "https://via.placeholder.com/150/f66b97",
      "https://via.placeholder.com/150/51aa97",
      "https://via.placeholder.com/150/1ee8a4"
    ]
  };

  setDropState = (dropedObj, draggedItemIndex) => {
    // bug when drop on same pos new is being
    debugger;
    const oldIndex = dropedObj.id;
    const arrStateCopy = [...this.state.imgArray];
    const fas = arrStateCopy[draggedItemIndex.imgId];
    if (draggedItemIndex.imgId !== oldIndex) {
      arrStateCopy[draggedItemIndex.imgId] = "";
    }
    arrStateCopy[oldIndex] = fas;
    this.setState({
      imgArray: arrStateCopy
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
