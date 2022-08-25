import React from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import { FiMoon, FiSun } from "react-icons/fi";

const Container = styled.div`
  width: 18%;
  height: 95px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 19px;
  color: white;
  font-weight: 200;
  font-size: 0.7em;
  padding: 1.5em 1em;
  position: absolute;
  top: 150px;
  right: 100px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 147px;
  max-width: 160px;
  z-index: 1;

  @media (min-width: 800px) {
    top: 90px;
    right: 370px;
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

const ModeContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-right: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.p`
  margin-bottom: 1.2em;
`;

const Theme = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const ThemeSelected = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
`;

const Light = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModeDropDown = ({ setDropDown, mode, setMode }) => {
  const handleClick = (theme) => {
    setMode(theme);
  };

  return (
    <Container>
      <Icon onClick={() => setDropDown(false)}>
        <VscClose fontSize={20} />
      </Icon>
      <ModeContainer>
        <Light>
          <Text>Light</Text>
          {mode === "dark" ? (
            <Theme onClick={() => handleClick("light")}>
              <FiSun fontSize={25} />
            </Theme>
          ) : (
            <ThemeSelected onClick={() => handleClick("light")}>
              <FiSun fontSize={25} />
            </ThemeSelected>
          )}
        </Light>
        <Dark>
          <Text>Dark</Text>
          {mode === "light" ? (
            <Theme onClick={() => handleClick("dark")}>
              <FiMoon fontSize={25} />
            </Theme>
          ) : (
            <ThemeSelected onClick={() => handleClick("dark")}>
              <FiMoon fontSize={25} />
            </ThemeSelected>
          )}
        </Dark>
      </ModeContainer>
    </Container>
  );
};

export default ModeDropDown;
