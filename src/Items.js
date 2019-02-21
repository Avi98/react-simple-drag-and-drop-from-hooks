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

const Items = props => {
  return (
    <div>
      <Contianer>
        {imgArray.map((imgs, id) => {
          return <ImagesItems key={`${imgs}${id}`} id={id} imgsrc={imgs} />;
        })}
      </Contianer>
    </div>
  );
};

export default Items;
