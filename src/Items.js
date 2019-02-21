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

const imgArray = [
  "https://via.placeholder.com/150/92c952",
  "https://via.placeholder.com/150/771796",
  "https://via.placeholder.com/150/24f355"
];

class Items extends React.Component {
  state = {
    dragging: { imgsrc: "", dragging: false },
    dropedImg: {
      imgsrc: "",
      droped: false
    }
  };
  setDragState = imgsrc => {
    this.setState(state => ({
      dragging: { imgsrc, dragging: true },
      droped: { ...state.droped, droped: false }
    }));
  };
  setDropState = imgsrc => {
    this.setState({
      dropedImg: {
        imgsrc,
        droped: true
      }
    });
  };
  render() {
    return (
      <div>
        <Contianer>
          {imgArray.map((imgs, id) => {
            return (
              <>
                {!this.state.dropedImg.droped ? (
                  <ImagesItems
                    key={`${imgs}${id}`}
                    id={id}
                    imgsrc={imgs}
                    setDropState={this.setDropState}
                    setDragState={this.setDragState}
                  />
                ) : (
                  <ImagesItems
                    key={`${imgs}${id}`}
                    id={id}
                    imgsrc={this.state.dragging.imgsrc}
                    setDropState={this.setDropState}
                    setDragState={this.setDragState}
                  />
                )}
              </>
            );
          })}
        </Contianer>
      </div>
    );
  }
}

export default Items;
