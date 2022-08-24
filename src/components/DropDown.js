import React from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import ModeDropDown from "./ModeDropDown";

const Container = styled.div`
  width: 20%;
  height: 360px;
  background-color: rgba(0, 0, 0, 0.66);
  border-radius: 19px;
  color: white;
  font-weight: 200;
  font-size: 0.7em;
  padding: 1.5em 1em;
  position: absolute;
  top: 150px;
  right: 120px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  min-width: 230px;
  max-width: 318px;

  @media (min-width: 800px) {
    top: 90px;
    right: 340px;
  }
`;

const Text = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  margin-left: 0.8em;
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

const Colors = styled.div`
  display: flex;
`;

const Solids = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 46%;
  padding-top: 1.5em;
`;

const Gradients = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 46%;
  padding-top: 1.5em;
`;

const SolidColor = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.color === "blue") return "#84CBFF";
    else if (props.color === "green") return "#8BFFA5";
    else if (props.color === "purple") return "#A0A8F4";
    else if (props.color === "orange") return "#FEB68E";
    else if (props.color === "red") return "#FC4646";
    else if (props.color === "pink") return "#FEC7FF";
    else if (props.color === "yellow") return "#F2FFA3";
    else if (props.color === "aqua") return "#6DE3FD";
  }};
`;

const GradientColor = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: ${(props) => {
    if (props.color === "blue") return "linear-gradient(107.54deg, #97DAFF 7.1%, #02486F 91.97%);";
    else if (props.color === "green")
      return "linear-gradient(107.54deg, #97FF9B 7.1%, #0B5200 91.97%);";
    else if (props.color === "pink")
      return "linear-gradient(107.54deg, #FDA5FF 7.1%, #7A0058 91.97%);";
    else if (props.color === "aqua")
      return "linear-gradient(107.54deg, #BAFFFB 7.1%, #01504B 91.97%);";
    else if (props.color === "red")
      return "linear-gradient(107.54deg, #F98E8E 7.1%, #590101 91.97%);";
    else if (props.color === "yellow")
      return "linear-gradient(107.54deg, #FCFF51 7.1%, #5B6300 91.97%);";
    else if (props.color === "gold")
      return "linear-gradient(107.54deg, #ECCE82 7.1%, #684500 91.97%);";
    else if (props.color === "purple")
      return "linear-gradient(107.54deg, #C4BAFF 7.1%, #3E006F 91.97%);";
    else if (props.color === "green/blue")
      return "linear-gradient(107.54deg, #69F466 7.1%, #025365 91.97%);";
    else if (props.color === "pink/purple")
      return "linear-gradient(107.54deg, #E588FC 7.1%, #163354 91.97%);";
    else if (props.color === "orange/red")
      return "linear-gradient(107.54deg, #FFDF70 7.1%, #980606 91.97%);";
    else if (props.color === "blue/purple")
      return "linear-gradient(107.54deg, #15FFE3 7.1%, #4C0067 91.97%);";
  }};
`;

const ColorContainer = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 1.5em;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
  }
`;

const ColorContainerSelected = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 1.5em;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const DropDown = ({ dropDown, setDropDown, background, setBackground, mode, setMode }) => {
  const handleClick = (color) => {
    setBackground(color);
  };

  if (dropDown === "Color") {
    return (
      <Container>
        <Icon onClick={() => setDropDown(false)}>
          <VscClose fontSize={20} />
        </Icon>
        <Text>
          <Title>Solids</Title>
          <Title>Gradients</Title>
        </Text>
        <Colors>
          <Solids>
            <div>
              {background === "blue" ? (
                <ColorContainerSelected>
                  <SolidColor color="blue" onClick={() => handleClick("blue")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="blue" onClick={() => handleClick("blue")}></SolidColor>
                </ColorContainer>
              )}
              {background === "green" ? (
                <ColorContainerSelected>
                  <SolidColor color="green" onClick={() => handleClick("green")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="green" onClick={() => handleClick("green")}></SolidColor>
                </ColorContainer>
              )}
              {background === "purple" ? (
                <ColorContainerSelected>
                  <SolidColor color="purple" onClick={() => handleClick("purple")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="purple" onClick={() => handleClick("purple")}></SolidColor>
                </ColorContainer>
              )}
              {background === "orange" ? (
                <ColorContainerSelected>
                  <SolidColor color="orange" onClick={() => handleClick("orange")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="orange" onClick={() => handleClick("orange")}></SolidColor>
                </ColorContainer>
              )}
            </div>
            <div>
              {background === "red" ? (
                <ColorContainerSelected>
                  <SolidColor color="red" onClick={() => handleClick("red")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="red" onClick={() => handleClick("red")}></SolidColor>
                </ColorContainer>
              )}
              {background === "pink" ? (
                <ColorContainerSelected>
                  <SolidColor color="pink" onClick={() => handleClick("pink")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="pink" onClick={() => handleClick("pink")}></SolidColor>
                </ColorContainer>
              )}
              {background === "yellow" ? (
                <ColorContainerSelected>
                  <SolidColor color="yellow" onClick={() => handleClick("yellow")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="yellow" onClick={() => handleClick("yellow")}></SolidColor>
                </ColorContainer>
              )}
              {background === "aqua" ? (
                <ColorContainerSelected>
                  <SolidColor color="aqua" onClick={() => handleClick("aqua")}></SolidColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <SolidColor color="aqua" onClick={() => handleClick("aqua")}></SolidColor>
                </ColorContainer>
              )}
            </div>
          </Solids>
          <Gradients>
            <div>
              {background === "blue/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="blue"
                    onClick={() => handleClick("blue/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="blue"
                    onClick={() => handleClick("blue/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "green/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="green"
                    onClick={() => handleClick("green/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="green"
                    onClick={() => handleClick("green/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "pink/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="pink"
                    onClick={() => handleClick("pink/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="pink"
                    onClick={() => handleClick("pink/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "aqua/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="aqua"
                    onClick={() => handleClick("aqua/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="aqua"
                    onClick={() => handleClick("aqua/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "red/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="red"
                    onClick={() => handleClick("red/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="red"
                    onClick={() => handleClick("red/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "yellow/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="yellow"
                    onClick={() => handleClick("yellow/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="yellow"
                    onClick={() => handleClick("yellow/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
            </div>
            <div>
              {background === "gold/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="gold"
                    onClick={() => handleClick("gold/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="gold"
                    onClick={() => handleClick("gold/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "purple/dark" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="purple"
                    onClick={() => handleClick("purple/dark")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="purple"
                    onClick={() => handleClick("purple/dark")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "green/blue" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="green/blue"
                    onClick={() => handleClick("green/blue")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="green/blue"
                    onClick={() => handleClick("green/blue")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "pink/purple" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="pink/purple"
                    onClick={() => handleClick("pink/purple")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="pink/purple"
                    onClick={() => handleClick("pink/purple")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "orange/red" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="orange/red"
                    onClick={() => handleClick("orange/red")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="orange/red"
                    onClick={() => handleClick("orange/red")}
                  ></GradientColor>
                </ColorContainer>
              )}
              {background === "blue/purple" ? (
                <ColorContainerSelected>
                  <GradientColor
                    color="blue/purple"
                    onClick={() => handleClick("blue/purple")}
                  ></GradientColor>
                </ColorContainerSelected>
              ) : (
                <ColorContainer>
                  <GradientColor
                    color="blue/purple"
                    onClick={() => handleClick("blue/purple")}
                  ></GradientColor>
                </ColorContainer>
              )}
            </div>
          </Gradients>
        </Colors>
      </Container>
    );
  } else if (dropDown === "Mode") {
    return <ModeDropDown setDropDown={setDropDown} mode={mode} setMode={setMode} />;
  } else if (dropDown === "Padding") {
    return <div></div>;
  } else if (dropDown === "Language") {
    return <div></div>;
  }
};

export default DropDown;
