import React, { useState } from "react";
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
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Dot = styled.div`
  border-radius: 50%;
  background-color: ${(props) => (props.red ? "#FC4646" : props.yellow ? "#FCB024" : "#29C231")};
  width: 8px;
  height: 8px;

  @media (min-width: 800px) {
    width: 12px;
    height: 12px;
  }
`;

const Filename = styled.input`
  color: #cdcdcd;
  font-weight: 200;
  font-family: "Poppins", sans-serif;
  font-size: 0.6em;
  background: none;
  text-align: center;
  width: auto;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 0;
    }

    &:-ms-input-placeholder {
      opacity: 0;
    }

    &::-ms-input-placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #cdcdcd;
    font-weight: 200;
    font-size: 0.8em;

    @media (min-width: 800px) {
      font-size: 1em;
    }
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #cdcdcd;
    font-weight: 200;
    font-size: 0.6em;

    @media (min-width: 800px) {
      font-size: 0.8em;
    }
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #cdcdcd;
    font-weight: 200;
    font-size: 0.6em;

    @media (min-width: 800px) {
      font-size: 0.8em;
    }
  }

  @media (min-width: 800px) {
    font-size: 0.8em;
  }
`;

const FilenameContainer = styled.div`
  max-width: 45%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    max-width: 65%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1em;

  @media (min-width: 800px) {
    padding: 1em 1.5em;
  }
`;

const Icon = styled.div`
  width: 46px;
  height: 3px;
  border-radius: 10px;
  background-color: #cdcdcd;
`;

const Image = () => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    e.target.setAttribute("size", e.target.value.length + 14);
    console.log(e.target.size);
    setTitle(e.target.value);
  };

  const getMaxLength = () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      return 55;
    } else {
      return 20;
    }
  };

  return (
    <ImageContainer id="capture">
      <TextEditor>
        <Header>
          <DotContainer>
            <Dot red></Dot>
            <Dot yellow></Dot>
            <Dot green></Dot>
          </DotContainer>
          <FilenameContainer>
            <Filename
              type="text"
              value={title}
              onChange={onChange}
              placeholder="Untitled"
              maxLength={getMaxLength()}
            />
          </FilenameContainer>
          <Icon></Icon>
        </Header>
      </TextEditor>
    </ImageContainer>
  );
};

export default Image;