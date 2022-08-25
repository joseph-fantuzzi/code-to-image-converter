import React, { useState } from "react";
import styled from "styled-components";
import Color from "./Color";
import Mode from "./Mode";
import Padding from "./Padding";
import Language from "./Language";
import DropDown from "./DropDown";

const SettingsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.66);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 8px;
  color: white;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 1em 2em;
  width: 40%;
  min-width: 280px;
  max-width: 400px;
`;

const Setting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 200;
  font-size: 0.8em;
  margin-bottom: 0.5em;
`;

const IconContainer = styled.div`
  padding: 0.2em;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 62%);
  }
`;
const Settings = ({ background, setBackground, mode, setMode, padding, setPadding }) => {
  const [dropDown, setDropDown] = useState(false);

  const settings = [
    { name: "Color", icon: <Color /> },
    { name: "Mode", icon: <Mode /> },
    { name: "Padding", icon: <Padding /> },
    { name: "Language", icon: <Language /> },
  ];

  return (
    <>
      <SettingsContainer>
        {settings.map((setting, i) => {
          return (
            <Setting key={i}>
              <Text>{setting.name}</Text>
              <IconContainer onClick={() => setDropDown(setting.name)}>
                {setting.icon}
              </IconContainer>
            </Setting>
          );
        })}
      </SettingsContainer>
      {dropDown && (
        <DropDown
          dropDown={dropDown}
          setDropDown={setDropDown}
          background={background}
          setBackground={setBackground}
          mode={mode}
          setMode={setMode}
          padding={padding}
          setPadding={setPadding}
        />
      )}
    </>
  );
};

export default Settings;
