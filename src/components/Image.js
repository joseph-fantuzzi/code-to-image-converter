import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 90%;
  height: 400px;
  margin: 0 auto;
  border-radius: 8px;
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
  width: 70%;
  height: 60%;
  background: linear-gradient(105.19deg, rgba(0, 0, 0, 0.4725) 0%, rgba(0, 0, 0, 0.63) 101.41%);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.26);
  border-radius: 24px;
`;

const Image = () => {
  return (
    <ImageContainer>
      <TextEditor></TextEditor>
    </ImageContainer>
  );
};

export default Image;
