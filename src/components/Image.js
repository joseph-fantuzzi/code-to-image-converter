import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 90%;
  height: 400px;
  margin: 0 auto;
  background: linear-gradient(107.54deg, #ffdf70 7.1%, #980606 91.97%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    width: 65%;
    height: 550px;
  }
`;
const TextEditor = styled.div`
  width: 60%;
  height: 60%;
  background: linear-gradient(105.19deg, rgba(0, 0, 0, 0.4725) 0%, rgba(0, 0, 0, 0.63) 101.41%);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.26);
  border-radius: 24px;
  position: relative;
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  top: 13px;
  left: 20px;
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.red ? "#FC4646" : props.yellow ? "#FCB024" : "#29C231")};
  width: 12px;
  height: 12px;
`;

const Filename = styled.div`
  color: #cdcdcd;
  font-weight: 200;
  font-size: 0.8em;
  padding: 1em 0;
  text-align: center;
`;

const Image = () => {
  return (
    <ImageContainer id="capture">
      <TextEditor>
        <Filename>Untitled.js</Filename>
        <DotContainer>
          <Dot red></Dot>
          <Dot yellow></Dot>
          <Dot green></Dot>
        </DotContainer>
      </TextEditor>
    </ImageContainer>
  );
};

export default Image;
