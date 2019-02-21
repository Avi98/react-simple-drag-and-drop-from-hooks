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

class Items extends React.Component {
  state = {
    imgArray: [
      "https://via.placeholder.com/150/92c952",
      "https://via.placeholder.com/150/771796",
      "https://via.placeholder.com/150/24f355"
    ]
  };

  setDropState = imgObj => {
    this.setState(state => {
      const indexArrToReplace = state.imgArray.indexOf(imgObj.imgsrc);
      const newImg = state.imgArray[this.props.itemId];

      //new array
      state.imgArray[indexArrToReplace] = newImg;
      debugger;
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
