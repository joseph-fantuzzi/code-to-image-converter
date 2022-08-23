import React from "react";
import styled from "styled-components";
import Color from "./Color";
import Mode from "./Mode";
import Padding from "./Padding";
import Language from "./Language";

const SettingsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.66);
  box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
  border-radius: 8px;
  color: white;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 1em 2em;
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

const Settings = () => {
  const settings = [
    { name: "Color", icon: <Color /> },
    { name: "Mode", icon: <Mode /> },
    { name: "Padding", icon: <Padding /> },
    { name: "Language", icon: <Language /> },
  ];

  return (
    <SettingsContainer>
      {settings.map((setting, i) => {
        return (
          <Setting key={i}>
            <Text>{setting.name}</Text>
            {setting.icon}
          </Setting>
        );
      })}
    </SettingsContainer>
  );
};

export default Settings;
