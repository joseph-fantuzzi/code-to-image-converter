import React from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

const Container = styled.div`
  width: 22%;
  height: 90px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 19px;
  color: white;
  font-weight: 200;
  font-size: 0.7em;
  padding: 1.5em 1em;
  position: absolute;
  top: 150px;
  right: 55px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 200px;
  max-width: 250px;
  z-index: 1;

  @media (min-width: 800px) {
    top: 90px;
    right: 280px;
  }
`;

const Icon = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    color: #ffdf70;
  }
`;

const PaddingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 1.5em;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Size = styled.p`
  font-size: 1.8em;
  margin-top: 0.6em;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #484848;
  }
`;

const SizeSelected = styled.p`
  font-size: 1.8em;
  margin-top: 0.6em;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: white;
  color: #484848;
`;

const PaddingDropDown = ({ setDropDown, padding, setPadding }) => {
  const sizes = [
    { size: "SM", amount: "16" },
    { size: "MD", amount: "32" },
    { size: "LG", amount: "64" },
    { size: "XL", amount: "128" },
  ];

  const clickHandler = (amount) => {
    setPadding(amount);
  };

  return (
    <Container>
      <Icon onClick={() => setDropDown(false)}>
        <VscClose fontSize={20} />
      </Icon>
      <PaddingContainer>
        {sizes.map((obj, i) => {
          return (
            <Text key={i}>
              <p>{obj.amount}</p>
              {padding === obj.size ? (
                <SizeSelected onClick={() => clickHandler(obj.size)}>{obj.size}</SizeSelected>
              ) : (
                <Size onClick={() => clickHandler(obj.size)}>{obj.size}</Size>
              )}
            </Text>
          );
        })}
      </PaddingContainer>
    </Container>
  );
};

export default PaddingDropDown;
